import Introduction from "../../components/introduction";
import About from "../../components/about";
import Education from "../../components/education";
import Skills from "../../components/skills";
import GitHubInfo from "../../components/github-info";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Education />
      <Skills />
      <GitHubInfo />
    </>
  );
}
