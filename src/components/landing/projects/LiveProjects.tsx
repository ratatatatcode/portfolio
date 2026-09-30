import Link from 'next/link';
import { Globe2 } from 'lucide-react';

import { liveProjects } from '@/data/projects';

export default function LiveProjectsComponent() {
  return (
    <div className="h-auto w-full rounded-xl border border-brand-dark/10 bg-white p-4">
      <h3 className="text-lg font-bold text-brand-dark">Live Projects</h3>

      <hr className="my-3 border-brand-dark/10" />

      <div className="flex flex-col gap-3">
        {liveProjects.map((project) => (
          <div key={project.id}>
            <h3 className="text-lg font-bold text-brand-dark">{project.title}</h3>
            <p className="mt-1 text-sm leading-6 text-brand-dark/70">{project.description}</p>
            <div className="my-3 flex flex-wrap gap-1.5">
              {project.website && (
                <button
                  className="inline-flex cursor-not-allowed items-center gap-1 rounded-md bg-background px-3 py-1.5 font-semibold text-brand-dark/60"
                  type="button"
                  disabled
                  title="Lyrica's backend is currently offline"
                  aria-label="Lyrica backend is currently offline"
                >
                  <Globe2 size={16} />
                  <span className="text-xs">Backend offline</span>
                </button>
              )}
              {project.position && (
                <p className="inline-flex items-center rounded-md bg-background px-3 py-1.5 font-semibold text-brand-dark/80">
                  <span className="text-xs">{project.position}</span>
                </p>
              )}
              {project.role && (
                <p className="inline-flex items-center rounded-md bg-background px-3 py-1.5 font-semibold text-brand-dark/80">
                  <span className="text-xs">{project.role}</span>
                </p>
              )}
            </div>
            <hr className="mb-3 border-brand-dark/10" />
            <Link href={project.src} target="_blank" rel="noopener noreferrer">
              <video className="rounded-lg border border-brand-dark/10" autoPlay loop muted playsInline preload="metadata">
                <source src={project.src} type="video/mp4" />
              </video>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
