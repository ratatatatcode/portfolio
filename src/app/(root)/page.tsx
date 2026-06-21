import MenuComponent from '@/components/landing/modal/menu';
import IntroductionComponent from '@/components/landing/introduction/introduction';
import AboutComponent from '@/components/landing/about';
import SkillsListComponent from '@/components/landing/skills';
import ExperienceComponent from '@/components/landing/experience';
import CertificationsComponent from '@/components/landing/certification';
import GitHubComponent from '@/components/landing/github/github';
import OtherProjectsCompoent from '@/components/landing/projects/otherProjects';
import ProjectListComponent from '@/components/landing/projects/projects';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'James Michael Magnaye',
  jobTitle: 'Full Stack Developer & UI/UX Engineer',
  url: 'https://magnaye.online',
  description:
    'Full stack developer building modern websites, web applications, and AI-powered digital experiences.',
  sameAs: ['https://github.com/ratatatatcode'],
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
  name: 'James Magnaye Portfolio',
  url: 'https://magnaye.online',
  author: {
    '@type': 'Person',
    name: 'James Michael Magnaye',
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
        <section className="hidden h-screen bg-gray-100 md:flex md:w-[5%] md:justify-center">
          <MenuComponent />
        </section>
        <section className="scrollbar-hide flex w-full flex-col gap-6 overflow-y-auto p-6 md:h-screen md:w-[65%] md:gap-0 md:p-4">
          <IntroductionComponent />
          <AboutComponent />
          <SkillsListComponent />
          <ExperienceComponent />
          <CertificationsComponent />
          <GitHubComponent />
        </section>
        <section className="scrollbar-hide flex h-screen w-full flex-col items-center gap-4 overflow-y-auto p-6 md:w-[30%] md:p-4">
          <ProjectListComponent />
          <OtherProjectsCompoent />
        </section>
      </main>
    </>
  );
}
