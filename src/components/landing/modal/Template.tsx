'use client';

import { ExternalLink } from 'lucide-react';
import ExploreDialog from './ExploreDialog';

type TemplateModalProps = {
  onClose: () => void;
};

export default function TemplateModalComponent({ onClose }: TemplateModalProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close Free Template backdrop"
        className="bg-brand-dark/30 absolute inset-0"
        onClick={onClose}
      />
      <ExploreDialog
        title="Free Template"
        eyebrow="SHARE THIS PORTFOLIO"
        description="Use this portfolio as a starting point for your own site. The README explains how to run it, customize the content, and deploy it."
        onClose={onClose}
        className="relative z-10 w-full max-w-md"
        modal
      >
        <a
          href="https://github.com/ratatatatcode/portfolio/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="from-brand-orange to-brand-strong inline-flex items-center gap-2 self-start rounded-md bg-gradient-to-br px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          View the free template
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </ExploreDialog>
    </div>
  );
}
