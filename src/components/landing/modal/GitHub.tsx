'use client';

import Image from 'next/image';
import { GitHubCalendar } from 'react-github-calendar';
import Draggable from 'react-draggable';
import { IoMdCloseCircle } from 'react-icons/io';
import { useRef } from 'react';
import { githubStreakUrl, siteConfig } from '@/data/siteConfig';

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
        className={`drag-handle fixed left-4 top-4 z-80 flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white p-5 shadow-xl shadow-slate-200/50 md:top-1/3 md:left-[10%] md:w-120 ${showState ? 'flex' : 'hidden'}`}
      >
        <div className="shrink-0">
          <div className="flex cursor-move items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">OPEN SOURCE ACTIVITY</p>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">GitHub</h2>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">A snapshot of my coding practice, experiments, and steady progress.</p>
            </div>
            <button className="no-drag rounded-md p-1 text-slate-500 transition hover:bg-blue-50 hover:text-blue-700" onClick={() => setShowState(false)}>
              <IoMdCloseCircle size={20} />
            </button>
          </div>
          <hr className="mb-3 border-blue-100" />
        </div>
        <div className="scrollbar-hide no-drag flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
          <GitHubCalendar
            username={siteConfig.github.username}
            year={siteConfig.github.contributionYear}
          />
          <Image
            src={githubStreakUrl}
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
