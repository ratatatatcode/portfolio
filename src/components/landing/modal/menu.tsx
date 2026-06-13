'use client';

import ExperienceModalComponent from './experience';
import CertificationsModalComponent from './certification';
import { GrCertificate } from 'react-icons/gr';
import GitHubModalComponent from './github';
import { FaGithub } from 'react-icons/fa6';
import { useState } from 'react';

export default function MenuComponent() {
  const [showExperience, setShowExperience] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);

  return (
    <>
      <div className="mt-10 flex flex-col gap-2">
        <button
          className={`h-10 w-10 rounded-md bg-[#C00707] text-xl font-bold text-white ${showExperience ? 'hidden' : 'block'}`}
          onClick={() => setShowExperience((prev) => !prev)}
          disabled={showExperience}
        >
          Ex
        </button>
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#C00707] text-xl font-bold text-white ${
            showCertifications ? 'hidden' : 'block'
          }`}
          onClick={() => setShowCertifications((prev) => !prev)}
          disabled={showCertifications}
        >
          <GrCertificate />
        </button>
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#C00707] text-xl font-bold text-white ${
            showGitHub ? 'hidden' : 'block'
          }`}
          onClick={() => setShowGitHub((prev) => !prev)}
          disabled={showGitHub}
        >
          <FaGithub />
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

      {showGitHub && <GitHubModalComponent showState={showGitHub} setShowState={setShowGitHub} />}
    </>
  );
}
