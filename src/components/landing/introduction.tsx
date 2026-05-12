import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-6xl">
          Hi, <span className="font-extrabold">I am James</span>
        </h1>
        <p>
          <strong>Full Stack Developer</strong> and Computer Science
          <br></br>undergrad, skilled in JavaScript.
        </p>
        <hr className="my-2 w-full" />
        <p className="text-xs font-semibold">
          <span className="text-[#E65127]">HTML</span>
          <span className="text-[#E7A328]">CSS</span>
          <span className="text-[#0C73B8]">JS</span>&nbsp;
          <span className="text-[#3E863E]">NODEJS</span>&nbsp;
          <span className="text-[#087EA4]">REACTJS</span>&nbsp;
          <span className="">NEXTJS</span>&nbsp;
          <span className="text-[#FDD545]">PYTHON</span>&nbsp;
          <span className="text-[#055BAF]">SQL/NOSQL</span>
        </p>
      </div>
      <Image
        height={180}
        width={180}
        src={'/logo/logo.png'}
        alt="Logo"
        className="-translate-x-15 -rotate-15"
      />
    </section>
  );
}
