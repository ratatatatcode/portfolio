import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="relative flex h-auto flex-col rounded-md bg-[#e0e0e0] p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] md:w-[50%]">
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
      <hr className="border-muted-foreground/50 my-2 w-full" />
      <p className="text-xs font-semibold">
        <span>HTMLCSSJS NODEJS REACTJS NEXTJS PYTHON SQL/NOSQL</span>
      </p>
      <Image
        src="/logo/wave.png"
        width={60}
        height={60}
        alt="Logo"
        className="waving-character absolute top-10 right-5 drop-shadow-xl md:right-0 md:h-35 md:w-35 lg:right-5"
      />
    </section>
  );
}
