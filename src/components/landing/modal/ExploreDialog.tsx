'use client';

import { useId, useRef, type ReactNode } from 'react';
import Draggable from 'react-draggable';
import { GripHorizontal, X } from 'lucide-react';

type ExploreDialogProps = {
  title: string;
  eyebrow: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  className: string;
  contentClassName?: string;
  modal?: boolean;
};

export default function ExploreDialog({
  title,
  eyebrow,
  description,
  onClose,
  children,
  className,
  contentClassName = '',
  modal = false,
}: ExploreDialogProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  return (
    <Draggable
      nodeRef={nodeRef}
      handle="[data-dialog-drag-handle]"
      cancel="a, button, input, textarea, select, [contenteditable], [role='button'], [data-no-drag]"
    >
      <div
        ref={nodeRef}
        role="dialog"
        aria-modal={modal || undefined}
        aria-labelledby={titleId}
        onDragStart={(event) => event.preventDefault()}
        className={`border-brand-soft shadow-brand-dark/10 flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-xl border bg-white p-5 shadow-xl ${className}`}
      >
        <div
          data-dialog-drag-handle
          className="flex shrink-0 cursor-grab touch-none items-start justify-between gap-4 select-none active:cursor-grabbing"
        >
          <div className="min-w-0">
            <p className="text-brand-strong mb-1 text-[10px] font-bold tracking-[0.18em]">
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="text-brand-dark text-xl font-bold tracking-tight md:text-2xl"
            >
              {title}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <GripHorizontal size={18} className="text-brand-dark/40 mt-1" aria-hidden="true" />
            <button
              type="button"
              aria-label={`Close ${title}`}
              className="text-brand-dark/60 hover:bg-brand-soft/40 hover:text-brand-strong focus-visible:outline-brand-orange cursor-pointer rounded-md p-1 transition focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={onClose}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
        {description && (
          <p data-dialog-description className="text-brand-dark/70 mt-1 shrink-0 text-sm leading-6">
            {description}
          </p>
        )}
        <hr className="border-brand-soft my-4 shrink-0" />
        <div
          data-dialog-content
          className={`scrollbar-hide flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain [&>*]:shrink-0 ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}
