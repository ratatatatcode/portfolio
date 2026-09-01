import { siteConfig } from '@/data/siteConfig';

export default function AboutComponent() {
  return (
    <div className="w-full text-justify text-sm md:w-[90%] md:p-4">
      <h2 className="mb-2 text-xl font-bold">
        <u>MORE ABOUT ME</u>
      </h2>
      <p className="mb-2">
        I am {siteConfig.owner.fullName}, <strong>{siteConfig.about.firstLead}</strong>&nbsp;
        {siteConfig.about.firstSummary}
      </p>
      <p>
        <strong>{siteConfig.about.secondLead}</strong>&nbsp;{siteConfig.about.secondSummary}
      </p>
    </div>
  );
}
