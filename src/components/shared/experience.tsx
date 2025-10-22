import Image from "next/image";

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
      <div className="w-full flex gap-2 items-center">
        <div className="">
          <Image
            src={img_src}
            alt="BSU Logo"
            height={50}
            width={50}
            className="min-w-[50px] min-h-[50px]"
          />
        </div>
        <div className="flex gap-4 w-full justify-between items-start">
          <div>
            <h3 className="font-semibold text-primary/90 text-sm">{company}</h3>
            <p className="text-muted-foreground text-justify text-xs">{role}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">{year_range}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-xs text-primary/80">
          What I do at {company}
        </p>
        <p className="text-muted-foreground text-justify text-xs">
          {experience}
        </p>
      </div>
    </div>
  );
}
