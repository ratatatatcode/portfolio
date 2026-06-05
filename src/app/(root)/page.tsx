import IntroductionComponent from '@/components/landing/introduction';
import ProjectListComponent from '@/components/landing/projects';

export default function Home() {
  return (
    <>
      <div className="w-[10%]"></div>
      <div className="w-[60%]">
        <IntroductionComponent />
      </div>
      <div className="scrollbar-hide flex h-screen w-[30%] flex-col items-center gap-4 overflow-y-auto p-4">
        <ProjectListComponent />
      </div>
    </>
  );
}
