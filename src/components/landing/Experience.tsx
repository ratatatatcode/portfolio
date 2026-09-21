import { experiences } from '@/data/experience';

export default function ExperienceComponent() {
  return (
    <section className="border-t border-slate-300 pt-6 md:hidden">
      <div className="mb-4">
        <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">WORK HISTORY</p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Experience</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">Roles and projects that shaped how I approach building useful software.</p>
      </div>
      <div className="flex flex-col gap-2">
        {experiences.map((experience, idx) => (
          <div key={idx} className="my-1 font-sans text-base">
            <p className="font-semibold">{experience.title}</p>
            <p className="text-muted-foreground text-[0.7rem]">{experience.date}</p>
            <p>• {experience.firstDesc}</p>
            <p>• {experience.secondDesc}</p>
            <p>• {experience.thirdDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
