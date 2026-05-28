import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function About() {
  return (
    <section className="my-5 flex flex-col justify-center md:w-[50%]">
      <h2 className="text-2xl font-bold">
        <u>About</u>
      </h2>
      <p>
        Computer Science undergraduate with&nbsp;
        <strong>hands-on experience in full stack development, UI/UX design,</strong> and building
        real-world applications using React and Node.js.
      </p>
      <div className="mt-4 flex">
        <Link href="https://facebook.com/hashtugs">
          <FaFacebookF className="h-8 w-8 bg-[#3B579D] pt-2 text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/magnaye/">
          <FaLinkedinIn className="h-8 w-8 bg-[#2E78B6] pt-2 text-white" />
        </Link>
        <Link href="https://www.github.com/ratatatatcode/">
          <FiGithub className="h-8 w-8 bg-[#1B1F22] pt-2 text-white" />
        </Link>
        <div className="ml-2 flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <IoCall />
            <p className="text-xs">09397458955</p>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail />
            <p className="text-xs">jamesdmagnaye@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
