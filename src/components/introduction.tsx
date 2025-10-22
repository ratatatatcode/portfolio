import Image from "next/image";
import Link from "next/link";
import { Github, Youtube, Facebook, Linkedin } from "lucide-react"; // Facebook may show a deprecation warning

export default function Introduction() {
  return (
    <section className="w-full flex justify-between gap-4 md:gap-12">
      <div>
        <h1 className="text-2xl font-bold">
          Hi, I am <u>James</u>!
        </h1>
        <p className="">
          <span className="font-semibold">Full Stack Developer</span> and
          Computer Science undergrad, skilled in JavaScript.
        </p>
        <div className="flex mt-1">
          <Link
            href="https://github.com/ratatatatcode"
            className="bg-gray-900 p-1"
          >
            <Github size={18} strokeWidth={2} className="text-white" />
          </Link>
          <Link href="/" className="bg-red-600 p-1">
            <Youtube size={18} strokeWidth={2} className="text-white" />
          </Link>
          <Link
            href="https://www.facebook.com/hashtugs"
            className="bg-blue-700 p-1"
          >
            <Facebook size={18} strokeWidth={2} className="text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/magnaye/https://www.facebook.com/hashtugs"
            className="bg-blue-500 p-1"
          >
            <Linkedin size={18} strokeWidth={2} className="text-white" />
          </Link>
        </div>
      </div>
      <Image
        src="/profile/profile.png"
        alt="Profile Picture"
        height={120}
        width={120}
        className="rounded-tl-2xl rounded-br-2xl rounded-tr-xl "
      />
    </section>
  );
}
