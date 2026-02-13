import ExperienceComponent from '../shared/experience';

export default function ExperienceSection() {
  const experiences = [
    {
      img_src: '/education/BSU003.webp',
      company: 'STEER Hub - DevOps',
      role: 'Frontend Developer',
      description:
        'I worked with my OJT teammates on frontend development using Next.js, mainly focusing on fixing and updating the UI, and I also made some changes to the backend using Express.js.',
      year_range: '2025',
    },
    {
      img_src: '/profile/logo.png',
      company: 'Freelancing',
      role: 'Full Stack Developer',
      description:
        'I collaborated with my friend on several Full Stack Development projects using Node.js, Express.js, and EJS, including a Blood Bank Management System, a Medical Information and Forum website, and a Student Portal with Google Classroom integration. I also independently developed a Printing Service web application, which I later began transitioning to Next.js.',
      year_range: '2023 - present',
    },
  ];

  return (
    <section className="w-full">
      <h2 className="mb-2 font-bold">EXPERIENCE</h2>
      <div className="flex w-full flex-col gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceComponent
            key={idx}
            img_src={exp.img_src}
            company={exp.company}
            role={exp.role}
            experience={exp.description}
            year_range={exp.year_range}
          />
        ))}
      </div>
    </section>
  );
}
