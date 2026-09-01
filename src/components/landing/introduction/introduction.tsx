import SocialLinksComponent from '@/components/landing/introduction/socials';

export default function IntroductionComponent() {
  return (
    <div className="relative z-50 w-full rounded-md bg-white/95 p-4 md:mt-5 md:w-full">
      <p className="text-muted-foreground mb-2 text-xs font-semibold">
        ratatatatcode/<u>README.md</u>
      </p>
      <h1 className="text-3xl font-bold md:text-4xl">
        Hello, I am <span className="text-[#0a0a0a]">James</span>!
      </h1>
      <p className="text-[#525252]">
        Computer Science graduate with&nbsp;
        <strong className="text-[#525252]">
          hands-on experience in full stack development and UI/UX design,
        </strong>
        &nbsp;gained through academic work and personal projects. Experienced in traditional and
        AI-assisted development.
      </p>
      <SocialLinksComponent />
    </div>
  );
}
