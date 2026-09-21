import Link from 'next/link';
import { Fragment } from 'react';
import { projects } from '@/data/projects';
import { FaAndroid, FaGithub } from 'react-icons/fa6';

import AutomationWorkflowsComponent from './AutomationWorkflows';

export default function ProjectListComponent() {
  return (
    <>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <div className="h-auto w-full rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="my-3 flex flex-wrap gap-1.5">
              {project.apk && (
                <a
                  className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 font-semibold text-white"
                  href={project.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAndroid size={16} />
                  <span className="text-xs">Get APK</span>
                </a>
              )}
              <a
                className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 font-semibold text-white"
                href={project.github}
              >
                <FaGithub size={16} />
                <span className="text-xs">{project.github ? 'Public' : 'Private'}</span>
              </a>
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

          {project.title === 'Kodo' && <AutomationWorkflowsComponent />}
        </Fragment>
      ))}
    </>
  );
}
