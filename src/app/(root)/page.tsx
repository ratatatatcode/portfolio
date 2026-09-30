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

function ProjectsSection({ className = '', id }: { className?: string; id?: string }) {
  return (
    <section id={id} className={`flex flex-col gap-4 ${className}`}>
      <div>
        <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-brand-strong">SELECTED WORK</p>
        <h2 className="text-2xl font-bold tracking-tight text-brand-dark">Projects</h2>
        <p className="mt-1 text-sm leading-5 text-brand-dark/60">A few things I have built, shipped, and explored.</p>
      </div>
      <LiveProjectsComponent />
      <ProjectListComponent />
      <OtherProjectsComponent />
    </section>
  );
}

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
        <MenuComponent />
        <section className="scrollbar-hide scroll-smooth flex w-full flex-col gap-6 overflow-y-auto p-6 md:h-screen md:min-w-0 md:flex-1 md:gap-0 md:p-4">
          <IntroductionComponent />
          <SkillsListComponent />
          <ExperienceComponent className="border-t border-brand-dark/20 pt-6 md:hidden" />
          <CertificationsComponent />
          <GitHubComponent />
          <ProjectsSection className="pt-5 md:hidden" id="projects-mobile" />
          <ContactForm />
        </section>
        <section className="scrollbar-hide hidden h-screen w-[35%] shrink-0 overflow-y-auto px-4 pt-9 pb-4 md:block lg:w-[30%] xl:w-[35%]">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brand-strong">EXPERIENCE &amp; PROJECTS</p>
          <ExperienceComponent />
          <ProjectsSection className="mt-8" id="projects" />
        </section>
      </main>
    </>
  );
}
