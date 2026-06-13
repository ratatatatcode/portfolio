'use client';

import { certifications } from '@/data/certifications';
import AutoHideHint from '@/components/shared/hint';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';

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
        className={`scrollbar-hide drag-handle top-3/4 left-1/4 z-90 h-80 w-120 overflow-y-scroll rounded-md border border-gray-400 bg-white p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <AutoHideHint>Click the header to view all certification proofs.</AutoHideHint>
        <div className="flex cursor-move items-center justify-between">
          <a
            href="https://drive.google.com/drive/folders/16-ggmo0RPa-X_PM_Xk0mKxUjOUnrzWtY?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
              <u>CERTIFICATIONS</u>
            </h2>
          </a>
          <button className="no-drag" onClick={() => setShowState(false)}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <hr className="mb-2 border-gray-400" />
        <div className="no-drag flex flex-col gap-2">
          {certifications.map((certification, idx) => (
            <div key={idx} className="my-1 text-sm">
              <p className="font-semibold">{certification.title}</p>
              <p>{certification.issuer}</p>
              <p className="text-muted-foreground text-[0.7rem]">{certification.date}</p>
              {certification.detailedDesc.map((desc, idx) => (
                <p key={idx}>• {desc}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
