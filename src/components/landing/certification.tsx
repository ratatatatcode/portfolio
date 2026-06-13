'use client';

import { certifications } from '@/data/certifications';

export default function CertificationsComponent() {
  return (
    <div className="md:hidden">
      <a
        href="https://drive.google.com/drive/folders/16-ggmo0RPa-X_PM_Xk0mKxUjOUnrzWtY?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
          <u>CERTIFICATIONS</u>
        </h2>
      </a>
      <p className="text-muted-foreground text-xs">
        Click the header to view all certification proofs.
      </p>
      <div className="gap-2=1 flex flex-col">
        {certifications.map((certification, idx) => (
          <div key={idx} className="my-1">
            <p className="font-semibold">{certification.title}</p>
            <p>{certification.issuer}</p>
            <p className="text-muted-foreground text-[0.7rem]">{certification.date}</p>
            {certification.detailedDesc.map((desc, idx) => (
              <p key={idx}>• {desc}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
