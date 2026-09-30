import { otherProjects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function OtherProjectsComponent() {
  return (
    <>
      <div className="h-auto w-full rounded-xl border border-brand-dark/10 bg-white p-4">
        <h3 className="text-lg font-bold text-brand-dark">Other Projects</h3>
        <hr className="my-3 border-brand-dark/10" />
        <div className="flex flex-col gap-3">
          {otherProjects.map((project) => (
            <div key={project.id}>
              <p className="text-sm font-semibold text-brand-dark">{project.title}</p>
              <p className="mt-1 text-sm leading-6 text-brand-dark/70">{project.description}</p>
              {project.github && (
                <a
                  className="mt-2 inline-flex items-center gap-1 rounded-md bg-brand-dark px-3 py-1.5 font-semibold text-white"
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
