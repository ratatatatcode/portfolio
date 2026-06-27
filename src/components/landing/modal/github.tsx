'use client';

import Image from 'next/image';
import { GitHubCalendar } from 'react-github-calendar';
import AutoHideHint from '@/components/shared/hint';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';

type GitHubModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GitHubModalComponent({ showState, setShowState }: GitHubModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" cancel=".no-drag">
      <div
        ref={nodeRef}
        className={`scrollbar-hide drag-handle top-1/3 left-[10%] z-80 h-auto w-120 overflow-y-scroll rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <AutoHideHint>You can drag this modal and reopen it using the sidebar.</AutoHideHint>
        <div className="flex cursor-move items-start justify-between">
          <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
            <u>GITHUB INFORMATION</u>
          </h2>
          <button className="no-drag" onClick={() => setShowState(false)}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <hr className="mb-2 border-gray-400" />
        <div className="flex flex-col gap-2">
          <GitHubCalendar username="ratatatatcode" year={2026} />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com?user=ratatatatcode&theme=dark&hide_border=false"
            alt="GitHub Streak"
            width={600}
            height={150}
            className="w-auto"
            unoptimized
          />
        </div>
      </div>
    </Draggable>
  );
}
