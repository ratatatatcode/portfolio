import BadgeComponent from '../shared/Badge';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaFigma, FaCode, FaRobot } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiCss,
  SiMake,
  SiOpenai,
} from 'react-icons/si';
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
    { text: 'Traditional Development', icon: <FaCode /> },
    { text: 'AI-assisted Development', icon: <FaRobot /> },
    { text: 'AI Workflow Automation', icon: <SiMake /> },
    { text: 'OpenAI API Integration', icon: <SiOpenai /> },
  ];

  return (
    <section className="w-full border-b border-brand-dark/20 pb-5 text-sm md:p-4 md:pb-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-brand-strong">CAPABILITIES</p>
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark">Skills & tools</h2>
          <p className="mt-1 text-sm text-brand-dark/60">Tools for building and improving digital products.</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-1.5">
        {skills.map((skill) => (
          <BadgeComponent
            key={skill.text}
            text={skill.text}
            icon={skill.icon}
            bg_color="bg-background"
            text_color="slate"
          />
        ))}
      </div>
    </section>
  );
}
