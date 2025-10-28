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
    { text: 'HTML5', icon: <FaHtml5 />, color: 'bg-[#e45f25]' },
    { text: 'JavaScript', icon: <FaJs />, color: 'bg-[#cfb430]' },
    { text: 'Node.js', icon: <FaNodeJs />, color: 'bg-[#6da55f]' },
    { text: 'Express.js', icon: <SiExpress />, color: 'bg-[#b4ca65]' },
    { text: 'React.js', icon: <FaReact />, color: 'bg-[#087ea4]' },
    { text: 'Next.js', icon: <SiNextdotjs />, color: 'bg-[#000000]' },
    { text: 'MySQL', icon: <SiMysql />, color: 'bg-[#005e86]' },
    { text: 'Firebase', icon: <SiFirebase />, color: 'bg-[#d62b00]' },
    { text: 'CSS3', icon: <SiCss3 />, color: 'bg-[#2862e9]' },
    { text: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-[#00bcff]' },
    { text: 'Figma', icon: <FaFigma />, color: 'bg-[#f24e1e]' },
    { text: 'Photoshop', icon: <SiAdobephotoshop />, color: 'bg-[#001d34]' },
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
            bg_color={skill.color}
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
