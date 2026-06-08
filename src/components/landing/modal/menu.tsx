'use client';

import ExperienceModalComponent from './experience';
import { useState } from 'react';

export default function MenuComponent() {
  const [showExperience, setShowExperience] = useState(true);

  return (
    <>
      <div className="mt-10">
        <button
          className="rounded-md bg-gray-700 px-3 py-1 text-2xl font-bold text-white"
          onClick={() => setShowExperience((prev) => !prev)}
        >
          E
        </button>
      </div>
      <ExperienceModalComponent showState={showExperience} setShowState={setShowExperience} />
    </>
  );
}
