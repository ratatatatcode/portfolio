import SocialLinksComponent from '@/components/landing/introduction/Socials';
import { siteConfig } from '@/data/siteConfig';
import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function IntroductionComponent() {
  return (
    <div className="relative z-10 w-full rounded-2xl border border-blue-100 bg-white p-5 md:mt-5 md:p-7">
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-blue-700">
        {siteConfig.owner.username}/<u>{siteConfig.introduction.eyebrowSuffix}</u>
      </p>
      <Image
        src="/profile/github-profile.png"
        alt={`${siteConfig.owner.displayName} profile photo`}
        width={64}
        height={64}
        className="absolute top-5 right-5 hidden h-16 w-16 rounded-full border-4 border-white object-cover ring-1 ring-blue-100 md:top-7 md:right-7 md:block"
      />
      <h1 className="max-w-2xl text-3xl leading-tight font-bold tracking-tight text-slate-900 md:pr-24 md:text-5xl">
        {siteConfig.introduction.headline}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        {siteConfig.introduction.lead}&nbsp;
        <strong className="text-slate-900">{siteConfig.introduction.emphasis}</strong>
        &nbsp;{siteConfig.introduction.summary}
      </p>
      <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50/70 p-4 md:p-5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-amber-800">
          {siteConfig.serviceCta.eyebrow}
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
          {siteConfig.serviceCta.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          {siteConfig.serviceCta.cleanDescription}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {siteConfig.serviceCta.actionLabel}
          <Mail size={16} aria-hidden="true" />
        </a>
      </div>
      <SocialLinksComponent />
    </div>
  );
}
