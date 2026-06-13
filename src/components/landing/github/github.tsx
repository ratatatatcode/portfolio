'use client';
import Image from 'next/image';
import GitHubCalendarClient from './calendar';

export default function GitHubComponent() {
  return (
    <div className="md:hidden">
      <div className="flex cursor-move items-center justify-between">
        <h2 className="text-2xl font-bold text-[#C00707] md:mb-2">
          <u>GITHUB INFORMATION</u>
        </h2>
      </div>
      <hr className="mb-2 border-gray-400" />
      <div className="flex flex-col gap-2">
        <GitHubCalendarClient />
        <Image
          src="https://github-readme-streak-stats.herokuapp.com?user=ratatatatcode&theme=dark&hide_border=false"
          alt="GitHub Streak"
          width={600}
          height={150}
          className="w-auto"
          unoptimized
        />
      </div>
    </div>
  );
}
