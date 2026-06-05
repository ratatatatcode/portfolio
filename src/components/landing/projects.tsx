import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa6";

export default function ProjectListComponent() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full h-auto border border-gray-400 p-4 rounded-sm"
        >
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <a
            className="inline-flex items-center my-2 border px-2 py-1 rounded-md gap-1 font-medium bg-black text-white"
            href={project.github}
          >
            <FaGithub size={16} />
            <span className="text-xs">
              {project.github ? "Public" : "Private"}
            </span>
          </a>
          <hr className="mb-2 border-gray-400" />
          <video autoPlay loop muted playsInline preload="metadata">
            <source src={project.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </>
  );
}
