import GitHubCalendar from "react-github-calendar";

export default function GitHubInfo() {
  return (
    <section className="w-full overflow-auto">
      <h2 className="font-bold">GITHUB INFO</h2>
      <div className="flex mb-2">
        <img
          src="https://github-readme-stats.vercel.app/api?username=ratatatatcode&show_icons=true&theme=dark"
          alt="GitHub Stats"
          className="w-[49%]"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=ratatatatcode&theme=dark&hide_border=false"
          alt="GitHub Streak"
          className="w-[51%]"
        />
      </div>
      <GitHubCalendar username="ratatatatcode" />
    </section>
  );
}
