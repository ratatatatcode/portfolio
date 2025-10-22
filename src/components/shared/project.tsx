import Image from 'next/image';
import Link from 'next/link';
import Badge from './badge';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function ProjectContainer({
  img_src,
  name,
  description,
  website,
  github,
}: {
  img_src: string;
  name: string;
  description: string;
  website?: string;
  github?: string;
}) {
  return (
    <div className="flex h-[380px] w-full flex-col justify-between rounded-2xl border p-4 md:h-[360px] lg:w-[300px]">
      <div className="flex flex-col gap-2">
        <Image src={img_src} alt={name} width={400} height={400} className="rounded-2xl" />
        <div>
          <hr className="my-2" />
          <h3 className="text-primary/80 font-semibold">{name}</h3>
          <p className="text-muted-foreground text-justify text-sm">{description}</p>
        </div>
      </div>

      <div className="flex gap-1">
        {website && (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Badge icon={<FaLink />} text="Visit Website" bg_color="bg-black" text_color="white" />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Badge icon={<FaGithub />} text="GitHub" bg_color="bg-black/80" text_color="white" />
          </Link>
        )}
      </div>
    </div>
  );
}
