'use client';

import { certifications } from '@/data/certifications';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';
import { siteConfig } from '@/data/siteConfig';

type CertificationModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CertificationsModalComponent({
  showState,
  setShowState,
}: CertificationModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`drag-handle fixed left-4 top-4 z-90 flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white p-5 shadow-xl shadow-slate-200/50 md:top-2/5 md:left-1/5 md:h-80 md:w-120 ${showState ? 'flex' : 'hidden'}`}
      >
        <div className="shrink-0">
          <div className="flex cursor-move items-start justify-between gap-4">
            <a href={siteConfig.documents.certifications} target="_blank" rel="noopener noreferrer">
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">LEARNING & CREDENTIALS</p>
              <h2 className="no-drag text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Certifications</h2>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">Courses and certifications that support my technical foundation.</p>
            </a>
            <button className="no-drag rounded-md p-1 text-slate-500 transition hover:bg-blue-50 hover:text-blue-700" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-3 border-blue-100" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
          {certifications.map((certification, idx) => (
            <div key={idx} className="my-1 text-sm">
              <p className="font-semibold">{certification.title}</p>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <p className="italic">{certification.issuer}</p>
                <p className="text-muted-foreground shrink-0 font-sans text-[0.7rem]">
                  {certification.date}
                </p>
              </div>
              {certification.description && (
                <p className="font-sans">{certification.description}</p>
              )}
              {certification.detailedDesc.map((desc, idx) => (
                <p key={idx} className="font-sans">
                  • {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
