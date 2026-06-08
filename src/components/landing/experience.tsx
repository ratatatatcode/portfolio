import { experiences } from '@/data/experience';

export default function ExperienceComponent() {
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
          <u>EXPERIENCE</u>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {experiences.map((experience, idx) => (
          <div key={idx} className="my-1 text-base">
            <p className="font-semibold">{experience.title}</p>
            <p className="text-muted-foreground text-[0.7rem]">{experience.date}</p>
            <p>• {experience.firstDesc}</p>
            <p>• {experience.secondDesc}</p>
            <p>• {experience.thirdDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
