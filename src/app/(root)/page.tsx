import IntroductionComponent from '@/components/landing/introduction/introduction';
import AboutComponent from '@/components/landing/about';
import OtherProjectsCompoent from '@/components/landing/projects/otherProjects';
import ProjectListComponent from '@/components/landing/projects/projects';

export default function Home() {
  return (
    <>
      <section className="hidden md:block md:w-[10%]"></section>
      <section className="scrollbar-hide w-full gap-6 overflow-y-auto md:h-screen md:w-[60%] md:gap-4">
        <IntroductionComponent />
        <AboutComponent />
      </section>
      <section className="scrollbar-hide flex h-screen w-full flex-col items-center gap-4 overflow-y-auto md:w-[30%]">
        <OtherProjectsCompoent />
        <ProjectListComponent />
      </section>
    </>
  );
}
