'use client';

import Image from 'next/image';
import AutoHideHint from '@/components/shared/Hint';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';

type FreelanceModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FreelanceModalComponent({ showState, setShowState }: FreelanceModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`drag-handle top-1/5 left-3/4 z-70 flex max-h-[80vh] w-120 flex-col overflow-hidden rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <div className="shrink-0">
          <AutoHideHint>
            You can message me directly, and we can work together on your projects.
          </AutoHideHint>
          <div className="flex cursor-move items-start justify-between">
            <h2 className="text-2xl font-bold text-[#0a0a0a] md:mb-2">
              <u>FREELANCE SERVICES</u>
            </h2>
            <button className="no-drag" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-2 border-gray-400" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
          <Image
            src="/freelance/freelance.png"
            alt="GitHub Streak"
            width={600}
            height={300}
            className="w-auto"
            unoptimized
          />
        </div>
      </div>
    </Draggable>
  );
}
