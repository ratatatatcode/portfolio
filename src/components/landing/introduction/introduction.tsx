import SocialLinksComponent from '@/components/landing/introduction/socials';

export default function IntroductionComponent() {
  return (
    <div className="w-full md:mt-10 md:w-[85%] md:p-4">
      <p className="text-muted-foreground mb-2 text-xs font-semibold">
        ratatatatcode/<u>README.md</u>
      </p>
      <h1 className="text-5xl font-bold md:text-6xl">
        Hello, I am <span className="text-[#FE3905]">James</span>!
      </h1>
      <p className="text-gray-700">
        Computer Science undergraduate with&nbsp;
        <strong className="text-[#1476ae]">
          hands-on experience in full stack development, UI/UX design,
        </strong>
        and building real-world applications using React and Node.js.
      </p>
      <SocialLinksComponent />
    </div>
  );
}
