import HomeBadge from '@/components/home/badges';
import { AnimatedListDemo } from '@/components/home/certifications';
import ExperienceAccordion from '@/components/home/experienceAccordion';
// import Testimonials from '@/components/home/marquee';
import Image from 'next/image';
import { TypingAnimation } from '@/components/magicui/typing-animation';

export default function Home() {
  return (
    <main className="my-12 w-full p-8 lg:w-[55%]">
      <section className="flex justify-between gap-4">
        <div>
          <h1 className="mb-1 text-4xl font-extrabold">
            <TypingAnimation className="leading-none">
              Hi, I&apos;m James!
            </TypingAnimation>
          </h1>
          <p className="text-lg text-balance text-gray-800 dark:text-gray-300">
            <strong>To Build is To Live</strong>. Clean code, smooth UX, and
            constant growth — that’s how I build for the web.
          </p>
        </div>
        <Image
          src="/me.png"
          alt="James Michael"
          width={120}
          height={120}
          className="rounded-full"
        />
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="text-justify text-base text-gray-800 dark:text-gray-300">
          Third-year Computer Science student with hands-on experience in
          software development through academic activities and personal
          projects. Competent in his skills, with a solid foundation in
          full-stack development, UI/UX design, and collaborative teamwork. A
          quick learner who is always eager to grow and explore new challenges.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <HomeBadge />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ExperienceAccordion />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Certifications</h2>
        <AnimatedListDemo />
      </section>

      {/* <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Testimonials</h2>
        <Testimonials />
      </section> */}
    </main>
  );
}
