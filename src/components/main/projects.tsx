import ProjectContainer from '../shared/project';

export default function ProjectsSection() {
  const projects = [
    {
      img_src: '/projects/blabber-ai.gif',
      name: 'Blabber AI',
      description:
        'Blabber AI is a chatbot powered by Google’s Gemini model. This project is my initial practice in setting up and using the Gemini API.',
      website: undefined,
      github: 'http://github.com/ratatatatcode/blabber-ai',
    },
    {
      img_src: '/projects/400br.gif',
      name: '400BadRequest',
      description:
        '4BR Team is a cybersecurity team that competes in international Capture The Flag (CTF) competitions to sharpen real-world security skills.',
      website: 'https://www.4br.team/',
      github: 'http://github.com/ratatatatcode/400br',
    },
  ];

  return (
    <section className="w-full">
      <h2 className="mb-2 font-bold">PROJECTS</h2>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
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
