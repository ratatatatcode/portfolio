'use client';

import { ExternalLink, X } from 'lucide-react';

type TemplateModalProps = {
  onClose: () => void;
};

export default function TemplateModalComponent({ onClose }: TemplateModalProps) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="template-title" className="fixed inset-0 z-70 flex items-center justify-center p-4">
      <button type="button" aria-label="Close Free Template" className="absolute inset-0 bg-brand-dark/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl border border-brand-soft bg-white p-5 shadow-xl shadow-brand-dark/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-brand-strong">SHARE THIS PORTFOLIO</p>
            <h2 id="template-title" className="text-2xl font-bold text-brand-dark">Free Template</h2>
          </div>
          <button type="button" aria-label="Close Free Template" className="rounded-md p-1 text-brand-dark/60 hover:bg-brand-soft/40 hover:text-brand-strong" onClick={onClose}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-brand-dark/70">
          Use this portfolio as a starting point for your own site. The README explains how to run it, customize the content, and deploy it.
        </p>
        <a href="https://github.com/ratatatatcode/portfolio/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-brand-orange to-brand-strong px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95">
          View the free template
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
