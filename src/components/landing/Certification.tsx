'use client';

import { certifications } from '@/data/certifications';
import { siteConfig } from '@/data/siteConfig';

export default function CertificationsComponent() {
  return (
    <section className="border-brand-dark/20 border-b pb-6 md:hidden">
      <a href={siteConfig.documents.certifications} target="_blank" rel="noopener noreferrer">
        <p className="text-brand-strong mb-1 text-[10px] font-bold tracking-[0.18em]">
          LEARNING & CREDENTIALS
        </p>
        <h2 className="text-brand-dark text-2xl font-bold tracking-tight">Certifications</h2>
      </a>
      <p className="text-brand-dark/70 mt-1 mb-4 text-sm leading-6">
        Courses and certifications that support my technical foundation.
      </p>
      <div className="flex flex-col gap-4">
        {certifications.map((certification, idx) => (
          <div key={idx}>
            <p className="font-semibold">{certification.title}</p>
            <div className="mt-1 mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="italic">{certification.issuer}</p>
              <p className="text-muted-foreground shrink-0 font-sans text-[0.7rem]">
                {certification.date}
              </p>
            </div>
            {certification.description && (
              <p className="font-sans text-sm">{certification.description}</p>
            )}
            {certification.detailedDesc.map((desc, idx) => (
              <p key={idx} className="font-sans">
                • {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
