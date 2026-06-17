import BadgeComponent from '../shared/badge';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMysql, SiFirebase, SiTailwindcss, SiCss } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import { SiLuau } from 'react-icons/si';

export default function SkillsListComponent() {
  const skills = [
    { text: 'HTML5', icon: <FaHtml5 /> },
    { text: 'JavaScript', icon: <FaJs /> },
    { text: 'Node.js', icon: <FaNodeJs /> },
    { text: 'Express.js', icon: <SiExpress /> },
    { text: 'React.js', icon: <FaReact /> },
    { text: 'Next.js', icon: <SiNextdotjs /> },
    { text: 'MySQL', icon: <SiMysql /> },
    { text: 'Firebase', icon: <SiFirebase /> },
    { text: 'CSS3', icon: <SiCss /> },
    { text: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { text: 'Figma', icon: <FaFigma /> },
    { text: 'Photoshop', icon: <DiPhotoshop /> },
    { text: 'Luau | Learning', icon: <SiLuau /> },
  ];

  return (
    <div className="w-full text-justify text-sm md:w-[90%] md:p-4">
      <h2 className="mb-2 text-2xl font-bold">
        <u>SKILLS</u>
      </h2>
      <div className="flex w-full flex-wrap gap-1">
        {skills.map((skill) => (
          <BadgeComponent
            key={skill.text}
            text={skill.text}
            icon={skill.icon}
            bg_color="bg-black/80"
            text_color="white"
          />
        ))}
      </div>
    </div>
  );
}
