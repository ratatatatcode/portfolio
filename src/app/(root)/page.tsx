import MenuComponent from '@/components/landing/modal/Menu';
import IntroductionComponent from '@/components/landing/introduction/Introduction';
import ContactForm from '@/components/landing/ContactForm';
import SkillsListComponent from '@/components/landing/Skills';
import ExperienceComponent from '@/components/landing/Experience';
import CertificationsComponent from '@/components/landing/Certification';
import GitHubComponent from '@/components/landing/github/GitHub';
import LiveProjectsComponent from '@/components/landing/projects/LiveProjects';
import OtherProjectsComponent from '@/components/landing/projects/OtherProjects';
import ProjectListComponent from '@/components/landing/projects/Projects';
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
        <section className="scrollbar-hide scroll-smooth flex w-full flex-col gap-6 overflow-y-auto p-6 md:h-screen md:w-[60%] md:gap-0 md:p-4">
          <IntroductionComponent />
          <ContactForm />
          <SkillsListComponent />
          <ExperienceComponent />
          <CertificationsComponent />
          <GitHubComponent />
        </section>
        <section id="projects" className="scrollbar-hide flex h-screen w-full flex-col gap-4 overflow-y-auto p-6 pt-4 md:w-[35%] md:gap-5 md:p-4 md:pt-0">
          <div className="mt-4 w-full border-b border-slate-300 pb-2 md:mt-5">
            <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-blue-700">SELECTED WORK</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Projects</h2>
            <p className="mt-1 text-sm leading-5 text-slate-500">A few things I have built, shipped, and explored.</p>
          </div>
          <LiveProjectsComponent />
          <ProjectListComponent />
          <OtherProjectsComponent />
        </section>
      </main>
    </>
  );
}
