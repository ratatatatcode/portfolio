import Image from "next/image";

export default function EducationComponent({
  img_src,
  program,
  level,
  school,
  year_range,
}: {
  img_src: string;
  program: string;
  level: string;
  school: string;
  year_range: string;
}) {
  return (
    <div className="w-full flex gap-2 items-center">
      <div>
        <Image src={img_src} alt="BSU Logo" height={50} width={50} />
      </div>
      <div className="flex gap-4 w-full justify-between items-start">
        <div>
          <h3 className="font-semibold text-primary/90 text-sm">{program}</h3>
          <p className="text-muted-foreground text-xs">
            {level} | {school}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">{year_range}</p>
        </div>
      </div>
    </div>
  );
}
