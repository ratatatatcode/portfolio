import Link from 'next/link';

import { automationWorkflows } from '@/data/projects';

export default function AutomationWorkflowsComponent() {
  return (
    <section className="h-auto w-full rounded-sm border border-gray-400 p-4">
      <h3 className="text-lg font-bold">AI Automation Workflows</h3>

      <hr className="my-2 border-gray-400" />

      <div className="flex flex-col gap-3">
        {automationWorkflows.map((workflow) => (
          <article key={workflow.id}>
            <h3 className="text-lg font-bold">{workflow.title}</h3>
            <p className="text-sm">{workflow.description}</p>
            <hr className="my-2 border-gray-400" />
            <Link href={workflow.src} target="_blank" rel="noopener noreferrer">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src={workflow.src} type="video/x-matroska" />
              </video>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
