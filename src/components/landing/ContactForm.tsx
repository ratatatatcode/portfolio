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
    <section
      id="contact"
      className="border-brand-dark/20 w-full border-b pb-6 md:border-b-0 md:p-4 md:pt-5"
    >
      <div className="mb-4">
        <p className="text-brand-strong mb-1 text-[10px] font-bold tracking-[0.18em]">
          START A CONVERSATION
        </p>
        <h2 className="text-brand-dark text-2xl font-bold tracking-tight">
          Tell me what you are working on
        </h2>
        <p className="text-brand-dark/70 mt-1 max-w-xl text-sm leading-6">
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
        <label className="text-brand-dark/80 grid gap-1.5 text-sm font-medium">
          Name
          <input
            name="name"
            required
            maxLength={100}
            className="border-brand-dark/20 focus:border-brand-orange focus:ring-brand-soft rounded-lg border bg-white px-3 py-2.5 transition outline-none focus:ring-2"
          />
        </label>
        <label className="text-brand-dark/80 grid gap-1.5 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            className="border-brand-dark/20 focus:border-brand-orange focus:ring-brand-soft rounded-lg border bg-white px-3 py-2.5 transition outline-none focus:ring-2"
          />
        </label>
        <label className="text-brand-dark/80 grid gap-1.5 text-sm font-medium sm:col-span-2">
          What do you need help with?
          <select
            name="project"
            required
            defaultValue=""
            className="border-brand-dark/20 text-brand-dark/80 focus:border-brand-orange focus:ring-brand-soft rounded-lg border bg-white px-3 py-2.5 transition outline-none focus:ring-2"
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
        <label className="text-brand-dark/80 grid gap-1.5 text-sm font-medium sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            maxLength={5000}
            rows={5}
            className="border-brand-dark/20 focus:border-brand-orange focus:ring-brand-soft resize-y rounded-lg border bg-white px-3 py-2.5 transition outline-none focus:ring-2"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="from-brand-orange to-brand-strong inline-flex items-center gap-2 rounded-md bg-gradient-to-br px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
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
