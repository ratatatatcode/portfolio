import { experiences } from '@/data/experience';

export default function ExperienceComponent({ className = '' }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mb-4">
        <p className="text-brand-strong mb-1 text-[10px] font-bold tracking-[0.18em]">BACKGROUND</p>
        <h2 className="text-brand-dark text-2xl font-bold tracking-tight">Experience</h2>
        <p className="text-brand-dark/70 mt-1 text-sm leading-6">
          Education, internship, and freelance projects that shaped how I build software.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="border-brand-dark/10 rounded-xl border bg-white p-4">
            <p className="text-brand-strong text-xs font-semibold">{experience.date}</p>
            <h3 className="text-brand-dark mt-1 text-lg font-bold">{experience.title}</h3>
            <p className="text-brand-dark/70 mt-2 text-sm leading-6">{experience.detailedDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
