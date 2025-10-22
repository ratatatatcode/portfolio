import Image from 'next/image';

export default function ExperienceComponent({
  img_src,
  company,
  role,
  experience,
  year_range,
}: {
  img_src: string;
  company: string;
  role: string;
  experience: string;
  year_range: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full items-center gap-2">
        <div className="">
          <Image
            src={img_src}
            alt="BSU Logo"
            height={50}
            width={50}
            className="min-h-[50px] min-w-[50px]"
          />
        </div>
        <div className="flex w-full items-start justify-between gap-4">
          <div>
            <h3 className="text-primary/90 text-sm font-semibold">{company}</h3>
            <p className="text-muted-foreground text-justify text-xs">{role}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">{year_range}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-primary/80 text-xs font-semibold">What I do at {company}</p>
        <p className="text-muted-foreground text-justify text-xs">{experience}</p>
      </div>
    </div>
  );
}
