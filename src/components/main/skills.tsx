import { FaHtml5, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiAdobephotoshop,
  SiCss3,
} from 'react-icons/si';
import Badge from '../shared/badge';

export default function SkillsSection() {
  const skills = [
    { text: 'HTML5', icon: <FaHtml5 /> },
    { text: 'JavaScript', icon: <FaJs /> },
    { text: 'Node.js', icon: <FaNodeJs /> },
    { text: 'Express.js', icon: <SiExpress /> },
    { text: 'React.js', icon: <FaReact /> },
    { text: 'Next.js', icon: <SiNextdotjs /> },
    { text: 'MySQL', icon: <SiMysql /> },
    { text: 'Firebase', icon: <SiFirebase /> },
    { text: 'CSS3', icon: <SiCss3 /> },
    { text: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { text: 'Figma', icon: <FaFigma /> },
    { text: 'Photoshop', icon: <SiAdobephotoshop /> },
  ];

  return (
    <section className="w-full">
      <h2 className="mb-2 font-bold">SKILLS</h2>
      <div className="flex w-full flex-wrap gap-1">
        {skills.map((skill) => (
          <Badge
            key={skill.text}
            text={skill.text}
            icon={skill.icon}
            bg_color="bg-black/80"
            text_color="white"
          />
        ))}

        {/*
          You can customize the array to include different colors or icons for each skill,
          then simply map through it to render the badges dynamically.
        */}
      </div>
    </section>
  );
}
