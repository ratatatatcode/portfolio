'use client';

import { certifications } from '@/data/certifications';
import { siteConfig } from '@/data/siteConfig';
import ExploreDialog from './ExploreDialog';

type CertificationModalProps = {
  showState: boolean;
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CertificationsModalComponent({
  showState,
  setShowState,
}: CertificationModalProps) {
  if (!showState) return null;

  return (
    <ExploreDialog
      title="Certifications"
      eyebrow="LEARNING & CREDENTIALS"
      description="Courses and certifications that support my technical foundation."
      onClose={() => setShowState(false)}
      className="fixed top-4 left-4 z-90 w-[calc(100vw-2rem)] md:top-2/5 md:left-1/5 md:h-80 md:w-120"
    >
      <a
        href={siteConfig.documents.certifications}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-strong self-start text-sm font-semibold underline underline-offset-4"
      >
        View certifications
      </a>
      {certifications.map((certification, idx) => (
        <div key={idx} className="text-sm">
          <p className="font-semibold">{certification.title}</p>
          <div className="mt-1 mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="italic">{certification.issuer}</p>
            <p className="text-muted-foreground shrink-0 font-sans text-[0.7rem]">
              {certification.date}
            </p>
          </div>
          {certification.description && <p className="font-sans">{certification.description}</p>}
          {certification.detailedDesc.map((desc, idx) => (
            <p key={idx} className="font-sans">
              • {desc}
            </p>
          ))}
        </div>
      ))}
    </ExploreDialog>
  );
}
