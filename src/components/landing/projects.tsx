import { projects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectListComponent() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="h-auto w-full rounded-sm border border-gray-400 p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <a
            className="my-2 inline-flex items-center gap-1 rounded-md border bg-black px-2 py-1 font-medium text-white"
            href={project.github}
          >
            <FaGithub size={16} />
            <span className="text-xs">{project.github ? 'Public' : 'Private'}</span>
          </a>
          <hr className="mb-2 border-gray-400" />
          <video autoPlay loop muted playsInline preload="metadata">
            <source src={project.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </>
  );
}
