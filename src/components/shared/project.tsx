import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import { FaGithub, FaLink } from "react-icons/fa";

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
    <div className="w-full lg:w-[300px] rounded-2xl h-[380px] md:h-[360px] border p-4 flex flex-col justify-between">
      <div className="flex gap-2 flex-col">
        <Image
          src={img_src}
          alt={name}
          width={400}
          height={400}
          className="rounded-2xl"
        />
        <div>
          <hr className="my-2" />
          <h3 className="font-semibold text-primary/80">{name}</h3>
          <p className="text-muted-foreground text-sm text-justify">
            {description}
          </p>
        </div>
      </div>

      <div className="flex gap-1">
        {website && (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Badge
              icon={<FaLink />}
              text="Visit Website"
              bg_color="bg-black"
              text_color="white"
            />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Badge
              icon={<FaGithub />}
              text="GitHub"
              bg_color="bg-black/80"
              text_color="white"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
