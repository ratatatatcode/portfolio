import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredFields = ['name', 'email', 'project', 'message'] as const;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const values = Object.fromEntries(
      requiredFields.map((field) => [field, String(body[field] ?? '').trim()]),
    ) as Record<(typeof requiredFields)[number], string>;

    if (requiredFields.some((field) => !values[field])) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || process.env.SMTP_MAIL;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

    if (!process.env.SMTP_HOST || !smtpUser || !process.env.SMTP_PASSWORD || !contactEmail) {
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 503 });
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
  } catch {
    return NextResponse.json({ error: 'We could not send your message. Please try again.' }, { status: 500 });
  }
}
