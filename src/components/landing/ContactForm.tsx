'use client';

import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error || 'Message could not be sent.');

      form.reset();
      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Message could not be sent.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="w-full pt-5 md:p-4 md:pt-5">
      <div className="mb-5">
        <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-brand-strong">
          START A CONVERSATION
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-brand-dark">
          Tell me what you are working on
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-brand-dark/70">
          Share the idea, the problem, or the setup you need help with. I will get back to you
          through email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        />
        <label className="grid gap-1.5 text-sm font-medium text-brand-dark/80">
          Name
          <input
            name="name"
            required
            maxLength={100}
            className="rounded-lg border border-brand-dark/20 bg-white px-3 py-2.5 transition outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-soft"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-brand-dark/80">
          Email
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            className="rounded-lg border border-brand-dark/20 bg-white px-3 py-2.5 transition outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-soft"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-brand-dark/80 sm:col-span-2">
          What do you need help with?
          <select
            name="project"
            required
            defaultValue=""
            className="rounded-lg border border-brand-dark/20 bg-white px-3 py-2.5 text-brand-dark/80 transition outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-soft"
          >
            <option value="" disabled>
              Select a service or problem
            </option>
            <option value="Website or landing page">Website or landing page</option>
            <option value="Web application or system">Web application or system</option>
            <option value="Workflow automation">Workflow automation</option>
            <option value="AI-assisted setup or prompts">AI-assisted setup or prompts</option>
            <option value="Guidance for starting an idea">Guidance for starting an idea</option>
            <option value="Website improvement or troubleshooting">
              Website improvement or troubleshooting
            </option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-brand-dark/80 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            maxLength={5000}
            rows={5}
            className="resize-y rounded-lg border border-brand-dark/20 bg-white px-3 py-2.5 transition outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-soft"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-brand-orange to-brand-strong px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
            <Mail size={16} aria-hidden="true" />
          </button>
          {status === 'success' && (
            <p className="text-xs text-emerald-700" role="status font-semibold">
              Message sent. Thank you for reaching out.
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs font-semibold text-red-600" role="alert">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
