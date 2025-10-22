import { Highlighter } from "@/components/ui/highlighter";

export default function About() {
  return (
    <section className="w-full">
      <hr className="w-full my-2" />
      <h2 className="font-bold">ABOUT</h2>
      <p className="text-muted-foreground text-justify text-sm">
        I’m a Computer Science student with hands-on experience in{" "}
        <Highlighter action="underline" color="#FF9800">
          full-stack development
        </Highlighter>{" "}
        and UI/UX design, gained through academic work and personal projects. I
        build user-friendly web apps and am a{" "}
        <Highlighter action="highlight" color="#87CEFA">
          quick learner
        </Highlighter>{" "}
        who loves exploring new things to grow as a developer.
      </p>
    </section>
  );
}
