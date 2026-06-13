'use client';

import ExperienceModalComponent from './experience';
import CertificationsModalComponent from './certification';
import { useState } from 'react';

export default function MenuComponent() {
  const [showExperience, setShowExperience] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <>
      <div className="mt-10 flex flex-col gap-2">
        <button
          className={`h-10 w-10 rounded-md bg-[#C00707] text-xl font-bold text-white ${showExperience ? 'hidden' : 'block'}`}
          onClick={() => setShowExperience((prev) => !prev)}
          disabled={showExperience}
        >
          E
        </button>
        <button
          className={`h-10 w-10 rounded-md bg-[#C00707] text-xl font-bold text-white ${showCertifications ? 'hidden' : 'block'}`}
          onClick={() => setShowCertifications((prev) => !prev)}
          disabled={showCertifications}
        >
          C
        </button>
      </div>

      {showExperience && (
        <ExperienceModalComponent showState={showExperience} setShowState={setShowExperience} />
      )}

      {showCertifications && (
        <CertificationsModalComponent
          showState={showCertifications}
          setShowState={setShowCertifications}
        />
      )}
    </>
  );
}
