import { otherProjects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function OtherProjectsCompoent() {
  return (
    <>
      <div className="h-auto w-full rounded-sm border border-gray-400 p-4">
        <h3 className="text-lg font-bold">Other Projects</h3>
        <hr className="my-2 border-gray-400" />
        <div className="flex flex-col gap-3">
          {otherProjects.map((project) => (
            <div key={project.id}>
              {project.title === 'Roblox Adventure Game' && <hr className="mb-2 border-gray-400" />}
              <p className="text-sm font-semibold">{project.title}</p>
              <p className="text-sm">{project.description}</p>
              {project.github && (
                <a
                  className="mt-1 inline-flex items-center gap-1 rounded-sm border bg-black/80 px-3 py-1.5 font-semibold text-white"
                  href={project.github}
                >
                  <FaGithub size={16} />
                  <span className="text-xs">Public</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
