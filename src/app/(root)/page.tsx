import IntroductionComponent from "@/components/landing/introduction";
import ProjectListComponent from "@/components/landing/projects";

export default function Home() {
  return (
    <>
      <div className="w-[10%]"></div>
      <div className="w-[60%]">
        <IntroductionComponent />
      </div>
      <div className="w-[30%] h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-center gap-4">
        <ProjectListComponent />
      </div>
    </>
  );
}
