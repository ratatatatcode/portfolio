import { projects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectListComponent() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="h-auto w-full rounded-sm border border-gray-400 p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="justif-center my-2 flex flex-wrap gap-0.5">
            <a
              className="py- inline-flex items-center gap-1 rounded-sm border bg-black/80 px-3 py-1.5 font-semibold text-white"
              href={project.github}
            >
              <FaGithub size={16} />
              <span className="text-xs">{project.github ? 'Public' : 'Private'}</span>
            </a>
            {project.position && (
              <p className="inline-flex items-center rounded-sm border bg-black/80 px-3 py-1.5 font-semibold text-white">
                <span className="text-xs">{project.position}</span>
              </p>
            )}
            {project.role && (
              <p className="inline-flex items-center rounded-sm border bg-black/80 px-3 py-1.5 font-semibold text-white">
                <span className="text-xs">{project.role}</span>
              </p>
            )}
          </div>
          <hr className="mb-2 border-gray-400" />
          <video autoPlay loop muted playsInline preload="metadata">
            <source src={project.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </>
  );
}
