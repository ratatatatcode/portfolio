import { otherProjects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';

export default function OtherProjectsComponent() {
  return (
    <>
      <div className="h-auto w-full rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="text-lg font-bold text-slate-900">Other Projects</h3>
        <hr className="my-3 border-slate-200" />
        <div className="flex flex-col gap-3">
          {otherProjects.map((project) => (
            <div key={project.id}>
              <p className="text-sm font-semibold text-slate-900">{project.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{project.description}</p>
              {project.github && (
                <a
                  className="mt-2 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 font-semibold text-white"
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
