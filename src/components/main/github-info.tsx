// import GitHubCalendar from "react-github-calendar";

export default function GitHubInfoSection() {
  return (
    <section className="w-full overflow-auto">
      <h2 className="mb-2 font-bold">GITHUB INFO</h2>
      {/* https://github.com/anuraghazra/github-readme-stats */}
      <div className="flex flex-wrap">
        <img
          src="https://github-readme-stats.vercel.app/api?username=ratatatatcode&commits_year=2025&show_icons=true&theme=dark"
          alt="GitHub Stats"
          className="w-full md:w-[49%]"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=ratatatatcode&theme=dark&hide_border=false"
          alt="GitHub Streak"
          className="w-full md:w-[51%]"
        />
      </div>
      {/* <GitHubCalendar username="ratatatatcode" /> */}
      {/* I suggest displaying this only when there are visible contributions or commits, so empty early dates won’t be shown. */}
    </section>
  );
}
