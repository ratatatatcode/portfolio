import Link from 'next/link';

import { automationWorkflows } from '@/data/projects';

export default function AutomationWorkflowsComponent() {
  return (
    <section className="h-auto w-full rounded-xl border border-brand-dark/10 bg-white p-4">
      <h3 className="text-lg font-bold text-brand-dark">AI Workflow Automations</h3>

      <hr className="my-3 border-brand-dark/10" />

      <div className="flex flex-col gap-3">
        {automationWorkflows.map((workflow) => (
          <article key={workflow.id}>
            <h3 className="text-lg font-bold text-brand-dark">{workflow.title}</h3>
            <p className="mt-1 text-sm leading-6 text-brand-dark/70">{workflow.description}</p>
            <hr className="my-3 border-brand-dark/10" />
            <Link href={workflow.src} target="_blank" rel="noopener noreferrer">
              <video className="rounded-lg border border-brand-dark/10" autoPlay loop muted playsInline preload="metadata">
                <source src={workflow.src} type="video/x-matroska" />
              </video>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
