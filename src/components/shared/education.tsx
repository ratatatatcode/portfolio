import Image from 'next/image';

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
    <div className="flex w-full items-center gap-2">
      <div>
        <Image src={img_src} alt="BSU Logo" height={50} width={50} />
      </div>
      <div className="flex w-full items-start justify-between gap-4">
        <div>
          <h3 className="text-primary/90 text-sm font-semibold">{program}</h3>
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
