'use client';

import { experiences } from '@/data/experience';
import AutoHideHint from '@/components/shared/Hint';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';

type ExperienceModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ExperienceModalComponent({
  showState,
  setShowState,
}: ExperienceModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`drag-handle top-1/2 left-1/2 z-100 flex h-100 w-140 flex-col overflow-hidden rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <div className="shrink-0">
          <AutoHideHint>You can drag this modal and reopen it using the sidebar.</AutoHideHint>
          <div className="flex cursor-move items-start justify-between">
            <h2 className="text-2xl font-bold text-[#0a0a0a] md:mb-2">
              <u>EXPERIENCE</u>
            </h2>
            <button className="no-drag" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-2 border-gray-400" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
          {experiences.map((experience, idx) => (
            <div key={idx} className="my-1 font-sans text-base">
              <p className="font-semibold">{experience.title}</p>
              <p className="text-muted-foreground font-sans text-[0.7rem]">{experience.date}</p>
              <p className="font-sans">• {experience.firstDesc}</p>
              <p className="font-sans">• {experience.secondDesc}</p>
              <p className="font-sans">• {experience.thirdDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
