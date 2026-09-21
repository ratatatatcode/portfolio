'use client';

import Draggable from 'react-draggable';
import Image from 'next/image';
import { challenges } from '@/data/challenges';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';

type LearningChallengesModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LearningChallengesModalComponent({
  showState,
  setShowState,
}: LearningChallengesModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`drag-handle fixed left-4 top-4 z-60 flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white p-5 shadow-xl shadow-slate-200/50 md:top-1/6 md:left-1/4 md:h-100 md:w-140 ${showState ? 'flex' : 'hidden'}`}
      >
        <div className="shrink-0">
          <div className="flex cursor-move items-start justify-between gap-4">
            <div className="mb-2 flex flex-col items-start justify-center">
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">PRACTICE & LEARNING</p>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Learning challenges</h2>
              <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                These challenges may not carry the same weight as certifications, but they
                demonstrate my dedication to learning through practice.
              </p>
            </div>
            <button className="no-drag rounded-md p-1 text-slate-500 transition hover:bg-blue-50 hover:text-blue-700" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-3 border-blue-100" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col items-center gap-2 overflow-y-auto">
          {challenges.map((challenge) => (
            <a href={challenge.link} key={challenge.id}>
              <Image
                src={challenge.src}
                alt={challenge.title}
                width={600}
                height={150}
                className="w-auto"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
