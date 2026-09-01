'use client';

import { certifications } from '@/data/certifications';
import AutoHideHint from '@/components/shared/Hint';
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
        className={`drag-handle top-2/5 left-1/5 z-90 flex h-80 w-120 flex-col overflow-hidden rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <div className="shrink-0">
          <AutoHideHint>Click the header to view all certification proofs.</AutoHideHint>
          <div className="flex cursor-move items-start justify-between">
            <a href={siteConfig.documents.certifications} target="_blank" rel="noopener noreferrer">
              <h2 className="no-drag text-2xl font-bold text-[#0a0a0a] md:mb-2">
                <u>CERTIFICATIONS</u>
              </h2>
            </a>
            <button className="no-drag" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-2 border-gray-400" />
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
