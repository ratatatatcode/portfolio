import ExperienceComponent from "../shared/experience";

export default function ExperienceSection() {
  return (
    <section className="w-full">
      <h2 className="font-bold mb-2">EXPERIENCE</h2>
      <div className="w-full flex flex-col gap-6">
        <ExperienceComponent
          img_src="/education/BSU003.webp"
          company="STEER Hub - DevOps"
          role="Frontend Developer"
          experience="I worked with my OJT teammates on frontend development using Next.js, mainly focusing on fixing and updating the UI, and I also made some changes to the backend using Express.js."
          year_range="2025"
        />
        <ExperienceComponent
          img_src="/profile/logo.png"
          company="Freelancing"
          role="Full Stack Developer"
          experience="I collaborated with my friend on several Full Stack Development projects using Node.js, Express.js, and EJS, including a Blood Bank Management System, a Medical Information and Forum website, and a Student Portal with Google Classroom integration. I also independently developed a Printing Service web application, which I later began transitioning to Next.js."
          year_range="2023 - present"
        />
      </div>
    </section>
  );
}
