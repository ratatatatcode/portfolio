'use client';

import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';

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
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full items-center gap-2">
        <div className="">
          <Image
            src={img_src}
            alt="Logo"
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
        <div className="flex w-full justify-between">
          <p className="text-primary/80 text-xs font-semibold">What I do at {company}</p>
          {isHidden ? (
            <ChevronDownIcon size={12} onClick={() => setIsHidden(false)} />
          ) : (
            <ChevronUpIcon size={12} onClick={() => setIsHidden(true)} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isHidden ? 'max-h-0 opacity-0' : 'max-h-50 opacity-100'
          }`}
        >
          <p className="text-muted-foreground pt-1 text-justify text-xs">{experience}</p>
        </div>
      </div>
    </div>
  );
}
