import Link from 'next/link';
import { Globe2 } from 'lucide-react';

import { liveProjects } from '@/data/projects';
import VideoPreview from './VideoPreview';

export default function LiveProjectsComponent() {
  return (
    <div className="border-brand-dark/10 h-auto w-full rounded-xl border bg-white p-4">
      <h3 className="text-brand-dark text-lg font-bold">Live Projects</h3>

      <hr className="border-brand-dark/10 my-3" />

      <div className="flex flex-col gap-3">
        {liveProjects.map((project) => (
          <div key={project.id}>
            <h3 className="text-brand-dark text-lg font-bold">{project.title}</h3>
            <p className="text-brand-dark/70 mt-1 text-sm leading-6">{project.description}</p>
            <div className="my-3 flex flex-wrap gap-1.5">
              {project.website && (
                <Link
                  className="bg-background text-brand-dark/80 hover:bg-brand-dark/10 inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-semibold"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <Globe2 size={16} />
                  <span className="text-xs">Visit website</span>
                </Link>
              )}
              {project.position && (
                <p className="bg-background text-brand-dark/80 inline-flex items-center rounded-md px-3 py-1.5 font-semibold">
                  <span className="text-xs">{project.position}</span>
                </p>
              )}
              {project.role && (
                <p className="bg-background text-brand-dark/80 inline-flex items-center rounded-md px-3 py-1.5 font-semibold">
                  <span className="text-xs">{project.role}</span>
                </p>
              )}
            </div>
            <hr className="border-brand-dark/10 mb-3" />
            <Link href={project.src} target="_blank" rel="noopener noreferrer">
              <VideoPreview src={project.src} title={project.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
