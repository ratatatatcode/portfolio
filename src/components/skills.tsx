import Badge from "./badge";

export default function Skills() {
  return (
    <section className="w-full">
      <h2 className="font-bold">SKILLS</h2>
      <div className="w-full flex gap-1 flex-wrap">
        <Badge text="html5" color="bg-orange-400" text_color="white" />
        <Badge text="javascript" color="bg-yellow-500" text_color="white" />
        <Badge text="nodejs" color="bg-green-800" text_color="white" />
        <Badge text="expressjs" color="bg-green-600" text_color="white" />
        <Badge text="reactjs" color="bg-blue-600" text_color="white" />
        <Badge text="nextjs" color="bg-black" text_color="white" />
        <Badge text="mysql" color="bg-blue-800" text_color="white" />
        <Badge text="firebase" color="bg-red-600" text_color="white" />
        <Badge text="tailwindcss" color="bg-blue-400" text_color="white" />
        <Badge text="figma" color="bg-red-700" text_color="white" />
        <Badge text="photoshop" color="bg-blue-800" text_color="white" />
        <Badge text="" color="" text_color="white" />
      </div>
    </section>
  );
}
