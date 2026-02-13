import IntroductionSection from '../../components/main/introduction';
import AboutSection from '../../components/main/about';
import SkillsSection from '../../components/main/skills';
import EducationSection from '../../components/main/education';
import ExperienceSection from '@/components/main/experience';
import ProjectsSection from '@/components/main/projects';

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
