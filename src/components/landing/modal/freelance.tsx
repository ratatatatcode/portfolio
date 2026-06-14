'use client';

import Image from 'next/image';
import { GitHubCalendar } from 'react-github-calendar';
import AutoHideHint from '@/components/shared/hint';
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
        className={`scrollbar-hide drag-handle top-1/5 left-3/4 z-70 h-auto w-120 overflow-y-scroll rounded-md border border-gray-400 bg-white p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <AutoHideHint>
          You can message me directly, and we can work together on your projects.
        </AutoHideHint>
        <div className="flex cursor-move items-center justify-between">
          <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
            <u>FREELANCE SERVICES</u>
          </h2>
          <button className="no-drag" onClick={() => setShowState(false)}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <hr className="mb-2 border-gray-400" />
        <div className="flex flex-col gap-2">
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
