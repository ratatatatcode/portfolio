import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredFields = ['name', 'email', 'project', 'message'] as const;
const fieldLimits = {
  name: 100,
  email: 254,
  project: 100,
  message: 5_000,
} as const;
const maxRequestBytes = 20_000;
const rateLimitWindowMs = 60 * 60 * 1_000;
const rateLimitMaxRequests = 5;
const requestLog = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(clientKey: string) {
  const now = Date.now();

  if (requestLog.size > 1_000) {
    for (const [key, entry] of requestLog) {
      if (entry.resetAt <= now) requestLog.delete(key);
    }
  }

  const current = requestLog.get(clientKey);

  if (!current || current.resetAt <= now) {
    requestLog.set(clientKey, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaxRequests;
}

function jsonError(error: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error }, { status, headers });
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > maxRequestBytes) {
      return jsonError('Request is too large.', 413);
    }

    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return jsonError('Content-Type must be application/json.', 415);
    }

    if (isRateLimited(getClientKey(request))) {
      return jsonError('Too many requests. Please try again later.', 429, {
        'Retry-After': String(rateLimitWindowMs / 1_000),
      });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxRequestBytes) {
      return jsonError('Request is too large.', 413);
    }

    const body = JSON.parse(rawBody) as Record<string, unknown>;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return jsonError('Invalid request.', 400);
    }

    // Honeypot: real users never see or fill this field. It catches simple bots.
    if (String(body.website ?? '').trim()) {
      return jsonError('Invalid request.', 400);
    }

    const values = Object.fromEntries(
      requiredFields.map((field) => [field, String(body[field] ?? '').trim()]),
    ) as Record<(typeof requiredFields)[number], string>;

    if (requiredFields.some((field) => !values[field])) {
      return jsonError('Please complete all required fields.', 400);
    }

    if (requiredFields.some((field) => values[field].length > fieldLimits[field])) {
      return jsonError('One or more fields are too long.', 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return jsonError('Please provide a valid email address.', 400);
    }

    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || process.env.SMTP_MAIL;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

    if (!process.env.SMTP_HOST || !smtpUser || !process.env.SMTP_PASSWORD || !contactEmail) {
      return jsonError('Email service is not configured yet.', 503);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      service: process.env.SMTP_SERVICE || undefined,
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: contactEmail,
      replyTo: values.email,
      subject: `Portfolio inquiry: ${values.project}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Request: ${values.project}`,
        '',
        values.message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return jsonError('Invalid request.', 400);
    }

    return jsonError('We could not send your message. Please try again.', 500);
  }
}
