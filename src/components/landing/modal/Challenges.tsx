'use client';

import Image from 'next/image';
import { challenges } from '@/data/challenges';
import ExploreDialog from './ExploreDialog';

type LearningChallengesModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LearningChallengesModalComponent({
  showState,
  setShowState,
}: LearningChallengesModalProps) {
  if (!showState) return null;

  return (
    <ExploreDialog
      title="Learning challenges"
      eyebrow="PRACTICE & LEARNING"
      description="These challenges may not carry the same weight as certifications, but they demonstrate my dedication to learning through practice."
      onClose={() => setShowState(false)}
      className="fixed top-4 left-4 z-60 w-[calc(100vw-2rem)] md:top-1/6 md:left-1/4 md:h-100 md:w-140"
      contentClassName="items-center"
    >
      {challenges.map((challenge) => (
        <a href={challenge.link} key={challenge.id}>
          <Image
            src={challenge.src}
            alt={challenge.title}
            width={600}
            height={150}
            className="w-auto"
            draggable={false}
            unoptimized
          />
        </a>
      ))}
    </ExploreDialog>
  );
}
