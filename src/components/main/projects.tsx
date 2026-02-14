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
    {
      img_src: '/projects/wordle-clone.gif',
      name: 'WORLDE Clone',
      description:
        'A small Wordle-inspired game — figure out the word in a few tries, built with Next.js.',
      github: 'http://github.com/ratatatatcode/wordle-web',
    },
  ];

  return (
    <section className="w-full">
      <h2 className="mb-2 font-bold">PROJECTS</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {projects.map((proj, idx) => (
          <ProjectContainer
            key={idx}
            img_src={proj.img_src}
            name={proj.name}
            description={proj.description}
            website={proj.website}
            github={proj.github}
          />
        ))}
      </div>
    </section>
  );
}
