'use client';

import CertificationsModalComponent from './Certification';
import GitHubModalComponent from './GitHub';
import FreelanceModalComponent from './Freelance';
import LearningChallengesModalComponent from './Challenges';
import TemplateModalComponent from './Template';
import { GrCertificate } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa6';
import { FaGamepad } from 'react-icons/fa';
import { Code2, LayoutTemplate } from 'lucide-react';
import { useState } from 'react';

export default function MenuComponent() {
  const [showCertifications, setShowCertifications] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showFreelance, setShowFreelance] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const menuButtonClass =
    'flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium text-brand-dark transition-colors hover:bg-brand-soft/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange lg:justify-start lg:gap-3 lg:px-3';

  return (
    <>
      <aside className="relative hidden h-screen w-14 shrink-0 md:block lg:w-44">
      <nav aria-label="Portfolio sections" className="relative z-60 flex h-screen w-full flex-col border-r border-brand-dark/10 bg-white px-2 pt-9 lg:px-3">
        <p className="mb-4 hidden px-3 text-xs font-bold tracking-[0.18em] text-brand-strong lg:block">EXPLORE</p>
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className={`${menuButtonClass} ${showCertifications ? 'hidden' : 'flex'}`}
            onClick={() => setShowCertifications((prev) => !prev)}
            disabled={showCertifications}
            aria-label="Open certifications modal"
            title="Certificates"
          >
            <GrCertificate className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden="true" />
            <span className="hidden lg:inline">Certificates</span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showGitHub ? 'hidden' : 'flex'}`}
            onClick={() => setShowGitHub((prev) => !prev)}
            disabled={showGitHub}
            aria-label="Open GitHub modal"
            title="GitHub"
          >
            <FaGithub className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden="true" />
            <span className="hidden lg:inline">GitHub</span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showFreelance ? 'hidden' : 'flex'}`}
            onClick={() => setShowFreelance((prev) => !prev)}
            disabled={showFreelance}
            aria-label="Open freelance modal"
            title="Freelance"
          >
            <Code2 className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden="true" />
            <span className="hidden lg:inline">Freelance</span>
          </button>
          <button
            type="button"
            className={`${menuButtonClass} ${showChallenges ? 'hidden' : 'flex'}`}
            onClick={() => setShowChallenges((prev) => !prev)}
            disabled={showChallenges}
            aria-label="Open learning challenges modal"
            title="Challenges"
          >
            <FaGamepad className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden="true" />
            <span className="hidden lg:inline">Challenges</span>
          </button>
          <button
            type="button"
            className={menuButtonClass}
            onClick={() => setShowTemplate(true)}
            aria-label="Open free template details"
            title="Free Template"
          >
            <LayoutTemplate className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden="true" />
            <span className="hidden lg:inline">Free Template</span>
          </button>
        </div>
      </nav>
      </aside>

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

      {showTemplate && <TemplateModalComponent onClose={() => setShowTemplate(false)} />}

      {(showCertifications || showGitHub || showFreelance || showChallenges) && (
        <div className="fixed inset-0 z-40 bg-brand-dark/20 backdrop-blur-sm" />
      )}
    </>
  );
}
