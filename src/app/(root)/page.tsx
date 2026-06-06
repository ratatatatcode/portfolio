import IntroductionComponent from '@/components/landing/introduction/introduction';
import AboutComponent from '@/components/landing/about';
import OtherProjectsCompoent from '@/components/landing/projects/otherProjects';
import ProjectListComponent from '@/components/landing/projects/projects';

export default function Home() {
  return (
    <>
      <section className="w-[10%]"></section>
      <section className="scrollbar-hide h-screen w-[60%] gap-4 overflow-y-auto p-4">
        <IntroductionComponent />
        <AboutComponent />
      </section>
      <section className="scrollbar-hide flex h-screen w-[30%] flex-col items-center gap-4 overflow-y-auto p-4">
        <OtherProjectsCompoent />
        <ProjectListComponent />
      </section>
    </>
  );
}
