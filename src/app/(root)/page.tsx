import MenuComponent from '@/components/landing/modal/Menu';
import IntroductionComponent from '@/components/landing/introduction/Introduction';
import AboutComponent from '@/components/landing/About';
import SkillsListComponent from '@/components/landing/Skills';
import ExperienceComponent from '@/components/landing/Experience';
import CertificationsComponent from '@/components/landing/Certification';
import GitHubComponent from '@/components/landing/github/GitHub';
import LiveProjectsComponent from '@/components/landing/projects/LiveProjects';
import OtherProjectsComponent from '@/components/landing/projects/OtherProjects';
import ProjectListComponent from '@/components/landing/projects/Projects';
import AutoHideHint from '@/components/shared/Hint';
import { siteConfig } from '@/data/siteConfig';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.owner.fullName,
  jobTitle: siteConfig.owner.role,
  url: siteConfig.siteUrl,
  description: siteConfig.seo.description,
  sameAs: Object.values(siteConfig.socialLinks),
  knowsAbout: [
    'Full Stack Development',
    'React',
    'Next.js',
    'Node.js',
    'UI/UX Design',
    'Software Development',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.seo.applicationName,
  url: siteConfig.siteUrl,
  author: {
    '@type': 'Person',
    name: siteConfig.owner.fullName,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="flex min-h-screen w-full flex-col md:flex-row">
        <section className="relative hidden h-screen md:block md:w-[5%]">
          <MenuComponent />
        </section>
        <section className="scrollbar-hide flex w-full flex-col gap-6 overflow-y-auto p-6 md:h-screen md:w-[60%] md:gap-0 md:p-4">
          <IntroductionComponent />
          <AboutComponent />
          <SkillsListComponent />
          <ExperienceComponent />
          <CertificationsComponent />
          <GitHubComponent />
        </section>
        <section className="scrollbar-hide flex h-screen w-full flex-col items-center gap-4 overflow-y-auto p-6 md:w-[35%] md:p-4">
          <AutoHideHint duration={7500}>
            Click the video to view it on a larger screen in a new tab.
          </AutoHideHint>
          <LiveProjectsComponent />
          <ProjectListComponent />
          <OtherProjectsComponent />
        </section>
      </main>
    </>
  );
}
