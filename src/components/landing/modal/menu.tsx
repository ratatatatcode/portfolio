'use client';

import ExperienceModalComponent from './experience';
import { useState } from 'react';

export default function MenuComponent() {
  const [showExperience, setShowExperience] = useState(true);

  return (
    <>
      <div className="mt-10">
        <button
          className={`rounded-md bg-[#C00707] px-3 py-1 text-xl font-bold text-white ${showExperience ? 'hidden' : 'block'}`}
          onClick={() => setShowExperience((prev) => !prev)}
          disabled={showExperience}
        >
          E
        </button>
      </div>

      {showExperience && (
        <ExperienceModalComponent showState={showExperience} setShowState={setShowExperience} />
      )}
    </>
  );
}
