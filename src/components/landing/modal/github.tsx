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
        className={`drag-handle top-1/3 left-[10%] z-80 flex max-h-[80vh] w-120 flex-col overflow-hidden rounded-md border border-gray-400 bg-gray-50 p-4 shadow-lg ${showState ? 'md:fixed' : 'md:hidden'}`}
      >
        <div className="shrink-0">
          <AutoHideHint>You can drag this modal and reopen it using the sidebar.</AutoHideHint>
          <div className="flex cursor-move items-start justify-between">
            <h2 className="text-2xl font-bold text-[#0a0a0a] md:mb-2">
              <u>GITHUB INFORMATION</u>
            </h2>
            <button className="no-drag" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-2 border-gray-400" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
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
