'use client';

import { experiences } from '@/data/experience';
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
        className={`drag-handle fixed left-4 top-4 z-100 flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white p-5 shadow-xl shadow-slate-200/50 md:top-1/2 md:left-1/2 md:h-100 md:w-140 ${showState ? 'flex' : 'hidden'}`}
      >
        <div className="shrink-0">
          <div className="flex cursor-move items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">WORK HISTORY</p>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Experience</h2>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">Roles and projects that shaped how I approach building useful software.</p>
            </div>
            <button className="no-drag rounded-md p-1 text-slate-500 transition hover:bg-blue-50 hover:text-blue-700" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-3 border-blue-100" />
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
