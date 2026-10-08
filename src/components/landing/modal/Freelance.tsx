'use client';

import Image from 'next/image';
import ExploreDialog from './ExploreDialog';

type FreelanceModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FreelanceModalComponent({ showState, setShowState }: FreelanceModalProps) {
  if (!showState) return null;

  return (
    <ExploreDialog
      title="Freelance services"
      eyebrow="AVAILABLE FOR PROJECTS"
      description="Practical websites, software, and guidance for ideas that need a clear starting point."
      onClose={() => setShowState(false)}
      className="fixed top-4 left-4 z-70 w-[calc(100vw-2rem)] md:top-1/5 md:right-4 md:left-auto md:w-120"
    >
      <Image
        src="/freelance/freelance.png"
        alt="Freelance services"
        width={600}
        height={300}
        className="w-auto"
        draggable={false}
        unoptimized
      />
    </ExploreDialog>
  );
}
