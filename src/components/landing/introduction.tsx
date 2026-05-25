export default function Introduction() {
  return (
    <section className="flex h-auto flex-col md:w-[50%]">
      <h1 className="text-5xl">
        Hi, <span className="font-extrabold">I am James</span>
      </h1>
      <p className="block md:hidden">
        <strong>Full Stack Developer</strong> and Computer Science undergrad, skilled in JavaScript.
      </p>
      <p className="hidden md:block">
        <strong>Full Stack Developer</strong> and Computer Science <br></br>undergrad, skilled in
        JavaScript.
      </p>
      <hr className="my-2 w-full" />
      <p className="text-xs font-semibold">
        <span>HTMLCSSJS NODEJS REACTJS NEXTJS PYTHON SQL/NOSQL</span>
      </p>
    </section>
  );
}
