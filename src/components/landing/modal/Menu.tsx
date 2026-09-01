'use client';

import ExperienceModalComponent from './Experience';
import CertificationsModalComponent from './Certification';
import GitHubModalComponent from './GitHub';
import FreelanceModalComponent from './Freelance';
import LearningChallengesModalComponent from './Challenges';
import { GrCertificate } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa6';
import { FaGamepad } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function MenuComponent() {
  const [showExperience, setShowExperience] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showFreelance, setShowFreelance] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const collapseTimer = window.setTimeout(() => setIsExpanded(false), 5000);
    return () => window.clearTimeout(collapseTimer);
  }, [isExpanded]);

  const menuButtonClass = `z-60 flex h-9 items-center gap-2 overflow-hidden rounded-md bg-[#0a0a0a] text-sm font-semibold text-white transition-[width,padding] duration-300 ease-in-out ${
    isExpanded ? 'w-36 px-3' : 'w-9 px-2.5'
  }`;
  const menuLabelClass = `whitespace-nowrap transition-[max-width,opacity] duration-200 ease-in-out ${
    isExpanded ? 'max-w-28 opacity-100 delay-100' : 'max-w-0 opacity-0'
  }`;

  return (
    <>
      <div
        className={`relative z-60 flex h-screen flex-col gap-2 overflow-hidden border-r border-gray-300 bg-gray-100 pt-10 transition-[width,padding] duration-300 ease-in-out ${
          isExpanded ? 'w-44 items-start px-4' : 'w-full items-center px-0'
        }`}
      >
        <button
          type="button"
          className={menuButtonClass}
          aria-expanded={isExpanded}
          aria-controls="portfolio-modal-menu"
          aria-label={isExpanded ? 'Collapse modal menu' : 'Expand modal menu'}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
            <FiMenu
              className={`absolute inset-0 transition-[opacity,transform] duration-200 ${
                isExpanded ? 'scale-75 opacity-0' : 'scale-100 opacity-100 delay-100'
              }`}
            />
            <FiX
              className={`absolute inset-0 transition-[opacity,transform] duration-200 ${
                isExpanded ? 'scale-100 opacity-100 delay-100' : 'scale-75 opacity-0'
              }`}
            />
          </span>
          <span className={menuLabelClass} aria-hidden="true">
            Close menu
          </span>
        </button>

        <div id="portfolio-modal-menu" className="flex flex-col items-start gap-2">
          <button
            type="button"
            className={`${menuButtonClass} ${showExperience ? 'hidden' : 'flex'}`}
            onClick={() => setShowExperience((prev) => !prev)}
            disabled={showExperience}
            aria-label="Open experience modal"
          >
            <span className="w-4 shrink-0 text-center text-xs" aria-hidden="true">
              Ex
            </span>
            <span className={menuLabelClass} aria-hidden="true">
              Experience
            </span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showCertifications ? 'hidden' : 'flex'}`}
            onClick={() => setShowCertifications((prev) => !prev)}
            disabled={showCertifications}
            aria-label="Open certifications modal"
          >
            <GrCertificate className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className={menuLabelClass} aria-hidden="true">
              Certificates
            </span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showGitHub ? 'hidden' : 'flex'}`}
            onClick={() => setShowGitHub((prev) => !prev)}
            disabled={showGitHub}
            aria-label="Open GitHub modal"
          >
            <FaGithub className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className={menuLabelClass} aria-hidden="true">
              GitHub
            </span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showFreelance ? 'hidden' : 'flex'}`}
            onClick={() => setShowFreelance((prev) => !prev)}
            disabled={showFreelance}
            aria-label="Open freelance modal"
          >
            <span className="w-4 shrink-0 text-center text-xs" aria-hidden="true">
              Fl
            </span>
            <span className={menuLabelClass} aria-hidden="true">
              Freelance
            </span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showChallenges ? 'hidden' : 'flex'}`}
            onClick={() => setShowChallenges((prev) => !prev)}
            disabled={showChallenges}
            aria-label="Open learning challenges modal"
          >
            <FaGamepad className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className={menuLabelClass} aria-hidden="true">
              Challenges
            </span>
          </button>
        </div>
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

      {showFreelance && (
        <FreelanceModalComponent showState={showFreelance} setShowState={setShowFreelance} />
      )}

      {showChallenges && (
        <LearningChallengesModalComponent
          showState={showChallenges}
          setShowState={setShowChallenges}
        />
      )}

      {(showExperience || showCertifications || showGitHub || showFreelance || showChallenges) && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/25 backdrop-blur-sm" />
      )}
    </>
  );
}
