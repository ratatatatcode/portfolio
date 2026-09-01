import SocialLinksComponent from '@/components/landing/introduction/Socials';
import { siteConfig } from '@/data/siteConfig';

export default function IntroductionComponent() {
  return (
    <div className="relative z-50 w-full rounded-md bg-white/95 p-4 md:mt-5 md:w-full">
      <p className="text-muted-foreground mb-2 text-xs font-semibold">
        {siteConfig.owner.username}/<u>{siteConfig.introduction.eyebrowSuffix}</u>
      </p>
      <h1 className="text-3xl font-bold md:text-4xl">
        Hello, I am <span className="text-[#0a0a0a]">{siteConfig.owner.firstName}</span>!
      </h1>
      <p className="text-[#525252]">
        {siteConfig.introduction.lead}&nbsp;
        <strong className="text-[#525252]">{siteConfig.introduction.emphasis}</strong>
        &nbsp;{siteConfig.introduction.summary}
      </p>
      <SocialLinksComponent />
    </div>
  );
}
