'use client';

import Image from 'next/image';
import { githubStreakUrl, siteConfig } from '@/data/siteConfig';
import { GitHubCalendar } from 'react-github-calendar';
import ExploreDialog from './ExploreDialog';

type GitHubModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GitHubModalComponent({ showState, setShowState }: GitHubModalProps) {
  if (!showState) return null;

  return (
    <ExploreDialog
      title="GitHub"
      eyebrow="OPEN SOURCE ACTIVITY"
      description="A snapshot of my coding practice, experiments, and steady progress."
      onClose={() => setShowState(false)}
      className="fixed top-4 left-4 z-80 w-[calc(100vw-2rem)] md:top-1/3 md:left-[10%] md:w-120"
    >
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
        draggable={false}
        unoptimized
      />
    </ExploreDialog>
  );
}
