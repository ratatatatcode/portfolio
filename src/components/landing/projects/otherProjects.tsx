import { otherProjects } from '@/data/projects';

export default function OtherProjectsCompoent() {
  return (
    <div className="h-auto w-full rounded-sm border border-gray-400 p-4">
      <h3 className="text-lg font-bold">Other Projects in Progress</h3>
      <hr className="my-2 border-gray-400" />
      <div className="flex flex-col gap-2">
        {otherProjects.map((project) => (
          <div key={project.id}>
            <p className="text-sm font-semibold">{project.title}</p>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
