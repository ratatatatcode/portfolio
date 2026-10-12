import Link from 'next/link';
import { Fragment } from 'react';
import { projects } from '@/data/projects';
import { FaAndroid, FaGithub } from 'react-icons/fa6';

import AutomationWorkflowsComponent from './AutomationWorkflows';
import VideoPreview from './VideoPreview';

export default function ProjectListComponent() {
  return (
    <>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <div className="border-brand-dark/10 h-auto w-full rounded-xl border bg-white p-4">
            <h3 className="text-brand-dark text-lg font-bold">{project.title}</h3>
            <p className="text-brand-dark/70 mt-1 text-sm leading-6">{project.description}</p>
            <div className="my-3 flex flex-wrap gap-1.5">
              {project.apk && (
                <a
                  className="bg-brand-dark inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-semibold text-white"
                  href={project.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAndroid size={16} />
                  <span className="text-xs">Get APK</span>
                </a>
              )}
              <a
                className="bg-brand-dark inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-semibold text-white"
                href={project.github}
              >
                <FaGithub size={16} />
                <span className="text-xs">{project.github ? 'Public' : 'Private'}</span>
              </a>
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

          {project.title === 'Kodo' && <AutomationWorkflowsComponent />}
        </Fragment>
      ))}
    </>
  );
}
