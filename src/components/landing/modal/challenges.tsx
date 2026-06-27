'use client';

import AutoHideHint from '@/components/shared/hint';
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
        className={`scrollbar-hide drag-handle top-1/6 left-1/4 z-60 h-100 w-140 overflow-y-scroll rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <AutoHideHint>You can drag this modal and reopen it using the sidebar.</AutoHideHint>
        <div className="flex cursor-move items-start justify-between">
          <div className="mb-2 flex flex-col items-start justify-center">
            <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
              <u>LEARNING CHALLENGES</u>
            </h2>
            <p className="text-muted-foreground text-xs">
              These challenges may not carry the same weight as certifications, but they demonstrate
              my dedication to learning through practice.
            </p>
          </div>
          <button className="no-drag" onClick={() => setShowState(false)}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <hr className="mb-2 border-gray-400" />
        <div className="flex flex-col items-center justify-center gap-2">
          {challenges.map((challenge) => (
            <Image
              src={challenge.src}
              alt={challenge.title}
              width={600}
              height={150}
              className="w-auto"
              key={challenge.id}
              unoptimized
            />
          ))}
        </div>
      </div>
    </Draggable>
  );
}
