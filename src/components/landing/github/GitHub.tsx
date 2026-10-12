'use client';
import Image from 'next/image';
import GitHubCalendarClient from './Calendar';
import { githubStreakUrl } from '@/data/siteConfig';

export default function GitHubComponent() {
  return (
    <section className="border-brand-dark/20 border-b pb-6 md:hidden">
      <div className="mb-4">
        <p className="text-brand-strong mb-1 text-[10px] font-bold tracking-[0.18em]">
          OPEN SOURCE ACTIVITY
        </p>
        <h2 className="text-brand-dark text-2xl font-bold tracking-tight">GitHub</h2>
        <p className="text-brand-dark/70 mt-1 text-sm leading-6">
          A snapshot of my coding practice, experiments, and steady progress.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <GitHubCalendarClient />
        <Image
          src={githubStreakUrl}
          alt="GitHub Streak"
          width={600}
          height={150}
          className="w-auto"
          unoptimized
        />
      </div>
    </section>
  );
}
