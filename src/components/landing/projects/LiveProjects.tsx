import Link from 'next/link';
import { Globe2 } from 'lucide-react';

import { liveProjects } from '@/data/projects';

export default function LiveProjectsComponent() {
  return (
    <div className="h-auto w-full rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-bold text-slate-900">Live Projects</h3>

      <hr className="my-3 border-slate-200" />

      <div className="flex flex-col gap-3">
        {liveProjects.map((project) => (
          <div key={project.id}>
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="my-3 flex flex-wrap gap-1.5">
              {project.website && (
                <a
                  className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 font-semibold text-white"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe2 size={16} />
                  <span className="text-xs">Website</span>
                </a>
              )}
              {project.position && (
                <p className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
                  <span className="text-xs">{project.position}</span>
                </p>
              )}
              {project.role && (
                <p className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
                  <span className="text-xs">{project.role}</span>
                </p>
              )}
            </div>
            <hr className="mb-3 border-slate-200" />
            <Link href={project.src} target="_blank" rel="noopener noreferrer">
              <video className="rounded-lg border border-slate-200" autoPlay loop muted playsInline preload="metadata">
                <source src={project.src} type="video/mp4" />
              </video>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
