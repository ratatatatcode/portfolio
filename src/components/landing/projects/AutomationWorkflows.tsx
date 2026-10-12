import Link from 'next/link';

import { automationWorkflows } from '@/data/projects';
import VideoPreview from './VideoPreview';

export default function AutomationWorkflowsComponent() {
  return (
    <section className="border-brand-dark/10 h-auto w-full rounded-xl border bg-white p-4">
      <h3 className="text-brand-dark text-lg font-bold">AI Workflow Automations</h3>

      <hr className="border-brand-dark/10 my-3" />

      <div className="flex flex-col gap-3">
        {automationWorkflows.map((workflow) => (
          <article key={workflow.id}>
            <h3 className="text-brand-dark text-lg font-bold">{workflow.title}</h3>
            <p className="text-brand-dark/70 mt-1 text-sm leading-6">{workflow.description}</p>
            <hr className="border-brand-dark/10 my-3" />
            <Link href={workflow.src} target="_blank" rel="noopener noreferrer">
              <VideoPreview src={workflow.src} title={workflow.title} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
