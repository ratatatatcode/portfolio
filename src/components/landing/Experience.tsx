import { experiences } from '@/data/experience';

export default function ExperienceComponent({ className = '' }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mb-4">
        <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-brand-strong">BACKGROUND</p>
        <h2 className="text-2xl font-bold tracking-tight text-brand-dark">Experience</h2>
        <p className="mt-1 text-sm leading-6 text-brand-dark/70">Education, internship, and freelance projects that shaped how I build software.</p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="rounded-xl border border-brand-dark/10 bg-white p-4">
            <p className="text-xs font-semibold text-brand-strong">{experience.date}</p>
            <h3 className="mt-1 text-lg font-bold text-brand-dark">{experience.title}</h3>
            <p className="mt-2 text-sm leading-6 text-brand-dark/70">{experience.detailedDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
