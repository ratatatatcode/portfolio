import IntroductionComponent from "@/components/landing/introduction";

export default function Home() {
  return (
    <>
      <div className="w-[10%]"></div>
      <div className="w-[60%]">
        <IntroductionComponent />
      </div>
      <div className="w-[30%]"></div>
    </>
  );
}
