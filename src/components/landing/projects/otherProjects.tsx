import { otherProjects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function OtherProjectsCompoent() {
  return (
    <>
      <div className="h-auto w-full rounded-sm border border-gray-400 p-4">
        <h3 className="text-lg font-bold">Other Projects</h3>
        <hr className="my-2 border-gray-400" />
        <div className="flex flex-col gap-2">
          {otherProjects.map((project) => (
            <div key={project.id}>
              <p className="text-sm font-semibold">{project.title}</p>
              <p className="text-sm">{project.description}</p>
              {project.github && (
                <a
                  className="my-2 inline-flex items-center gap-1 rounded-md border bg-black px-2 py-1 font-medium text-white"
                  href={project.github}
                >
                  <FaGithub size={16} />
                  <span className="text-xs">Public</span>
                </a>
              )}
              {project.title === 'Blabber AI (AI Wrapper)' && (
                <hr className="mb-2 border-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
