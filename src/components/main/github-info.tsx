// import GitHubCalendar from "react-github-calendar";

export default function GitHubInfoSection() {
  return (
    <section className="w-full overflow-auto">
      <h2 className="font-bold mb-2">GITHUB INFO</h2>
      <div className="flex flex-wrap">
        <img
          src="https://github-readme-stats.vercel.app/api?username=ratatatatcode&show_icons=true&theme=dark"
          alt="GitHub Stats"
          className="md:w-[49%] w-full"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=ratatatatcode&theme=dark&hide_border=false"
          alt="GitHub Streak"
          className="md:w-[51%] w-full"
        />
      </div>
      {/* <GitHubCalendar username="ratatatatcode" /> */}
      {/* I suggest displaying this only when there are visible contributions or commits, so empty early dates won’t be shown. */}
    </section>
  );
}
