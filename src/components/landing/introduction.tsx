import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="relative flex translate-x-7.5 flex-col">
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
          src="/logo/logo.png"
          alt="Logo"
          className="-translate-x-7.5 -rotate-15"
          loading="eager"
        />
        {/* Floating logo: */}
        <Image
          height={60}
          width={60}
          src="/programming/node.jpg"
          alt="Logo"
          className="absolute -top-3 -left-2.5 -rotate-20 shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          loading="eager"
        />
        <Image
          height={45}
          width={45}
          src="/programming/js.png"
          alt="Logo"
          className="absolute -bottom-2.5 -left-5 -rotate-30 shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          loading="eager"
        />
        <Image
          height={65}
          width={65}
          src="/programming/python.png"
          alt="Logo"
          className="absolute -top-5 -right-5 -rotate-15 shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          loading="eager"
        />
        <Image
          height={45}
          width={45}
          src="/programming/sql.png"
          alt="Logo"
          className="absolute top-4.5 -right-7.5 rotate-15 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          loading="eager"
        />
        <Image
          height={45}
          width={45}
          src="/programming/nextjs.jpeg"
          alt="Logo"
          className="absolute -right-2.5 bottom-2.5 rotate-25 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          loading="eager"
        />
      </div>
    </section>
  );
}
