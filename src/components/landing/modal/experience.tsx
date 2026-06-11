'use client';

import { experiences } from '@/data/experience';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';

type ExperienceModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ExperienceModalComponent({
  showState,
  setShowState,
}: ExperienceModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`scrollbar-hide drag-handle top-1/2 left-1/2 h-100 w-120 overflow-y-scroll rounded-md border border-gray-400 bg-white p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        {showHint && (
          <p className="text-muted-foreground text-xs">
            You can drag this modal and reopen it using the sidebar.
          </p>
        )}
        <div className="flex cursor-move items-center justify-between">
          <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
            <u>EXPERIENCE</u>
          </h2>

          <button className="no-drag" onClick={() => setShowState(false)}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <hr className="mb-2 border-gray-400" />
        <div className="no-drag flex flex-col gap-2">
          {experiences.map((experience, idx) => (
            <div key={idx} className="my-1 text-sm">
              <p className="font-semibold">{experience.title}</p>
              <p className="text-muted-foreground text-[0.7rem]">{experience.date}</p>
              <p>• {experience.firstDesc}</p>
              <p>• {experience.secondDesc}</p>
              <p>• {experience.thirdDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
