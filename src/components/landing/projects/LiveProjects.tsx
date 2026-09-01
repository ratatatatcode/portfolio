import Link from 'next/link';
import { Globe2 } from 'lucide-react';

import { liveProjects } from '@/data/projects';

export default function LiveProjectsComponent() {
  return (
    <div className="h-auto w-full rounded-sm border border-gray-400 p-4">
      <h3 className="text-lg font-bold">Live Projects</h3>

      <hr className="my-2 border-gray-400" />

      <div className="flex flex-col gap-3">
        {liveProjects.map((project) => (
          <div key={project.id}>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <div className="justif-center my-2 flex flex-wrap gap-0.5">
              {project.website && (
                <a
                  className="inline-flex items-center gap-1 rounded-sm border bg-[#0a0a0a] px-3 py-1.5 font-semibold text-white"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe2 size={16} />
                  <span className="text-xs">Website</span>
                </a>
              )}
              {project.position && (
                <p className="inline-flex items-center rounded-sm border bg-[#0a0a0a] px-3 py-1.5 font-semibold text-white">
                  <span className="text-xs">{project.position}</span>
                </p>
              )}
              {project.role && (
                <p className="inline-flex items-center rounded-sm border bg-[#0a0a0a] px-3 py-1.5 font-semibold text-white">
                  <span className="text-xs">{project.role}</span>
                </p>
              )}
            </div>
            <hr className="mb-2 border-gray-400" />
            <Link href={project.src} target="_blank" rel="noopener noreferrer">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src={project.src} type="video/mp4" />
              </video>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
