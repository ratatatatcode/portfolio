import { otherProjects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function OtherProjectsComponent() {
  return (
    <>
      <div className="border-brand-dark/10 h-auto w-full rounded-xl border bg-white p-4">
        <h3 className="text-brand-dark text-lg font-bold">Other Projects</h3>
        <hr className="border-brand-dark/10 my-3" />
        <div className="flex flex-col gap-3">
          {otherProjects.map((project) => (
            <div key={project.id}>
              <p className="text-brand-dark text-sm font-semibold">{project.title}</p>
              <p className="text-brand-dark/70 mt-1 text-sm leading-6">{project.description}</p>
              {project.github && (
                <a
                  className="bg-brand-dark mt-2 inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-semibold text-white"
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
