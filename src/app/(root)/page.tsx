import MenuComponent from '@/components/landing/modal/menu';
import IntroductionComponent from '@/components/landing/introduction/introduction';
import AboutComponent from '@/components/landing/about';
import ExperienceComponent from '@/components/landing/experience';
import OtherProjectsCompoent from '@/components/landing/projects/otherProjects';
import ProjectListComponent from '@/components/landing/projects/projects';

export default function Home() {
  return (
    <>
      <section className="hidden h-screen bg-gray-100 md:flex md:w-[5%] md:justify-center">
        <MenuComponent />
      </section>
      <section className="scrollbar-hide flex w-full flex-col gap-6 overflow-y-auto p-6 md:h-screen md:w-[65%] md:gap-4 md:p-4">
        <IntroductionComponent />
        <AboutComponent />
        <ExperienceComponent />
      </section>
      <section className="scrollbar-hide flex h-screen w-full flex-col items-center gap-4 overflow-y-auto p-6 md:w-[30%] md:p-4">
        <OtherProjectsCompoent />
        <ProjectListComponent />
      </section>
    </>
  );
}
