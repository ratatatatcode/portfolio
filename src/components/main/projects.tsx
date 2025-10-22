import ProjectContainer from "../shared/project";

export default function ProjectsSection() {
  const projects = [
    {
      img_src: "/projects/blabber-ai.gif",
      name: "Blabber AI",
      description:
        "Blabber AI is a chatbot powered by Google’s Gemini model. This project is my initial practice in setting up and using the Gemini API.",
      website: undefined,
      github: "http://github.com/ratatatatcode/blabber-ai",
    },
  ];

  return (
    <section className="w-full">
      <h2 className="font-bold mb-2">PROJECTS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {projects.map((project) => (
          <ProjectContainer
            key={project.name}
            img_src={project.img_src}
            name={project.name}
            description={project.description}
            website={project.website}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
