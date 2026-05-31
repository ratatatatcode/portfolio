import { ExperienceCompilation } from '@/lib/data/experience';

export default function Experience() {
  return (
    <section className="my-5 flex flex-col justify-center md:w-[50%]">
      <h2 className="text-right text-2xl font-bold">
        <u>Experience</u>
      </h2>
      {ExperienceCompilation.map((exp, idx) => (
        <div key={idx} className="my-1">
          <p className="font-semibold">{exp.title}</p>
          <p className="text-muted-foreground text-[0.7rem]">{exp.date}</p>
          <p className="text-sm">• {exp.firstDesc}</p>
          <p className="text-sm">• {exp.secondDesc}</p>
          <p className="text-sm">• {exp.thirdDesc}</p>
        </div>
      ))}
    </section>
  );
}
