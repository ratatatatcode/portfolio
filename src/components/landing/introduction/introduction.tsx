import SocialLinksComponent from '@/components/landing/introduction/socials';

export default function IntroductionComponent() {
  return (
    <div className="w-full md:mt-5 md:w-[85%] md:p-4">
      <p className="text-muted-foreground mb-2 text-xs font-semibold">
        ratatatatcode/<u>README.md</u>
      </p>
      <h1 className="text-5xl font-bold md:text-6xl">
        Hello, I am <span className="text-[#FE3905]">James</span>!
      </h1>
      <p className="text-gray-700">
        Computer Science student with&nbsp;
        <strong className="text-[#1476ae]">
          hands-on experience in full stack development and UI/UX design,
        </strong>
        gained through academic work and personal projects.
      </p>
      <SocialLinksComponent />
    </div>
  );
}
