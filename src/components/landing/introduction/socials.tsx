import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function SocialLinksComponent() {
  return (
    <div className="mt-2 mb-4 flex flex-wrap gap-2 md:mb-0">
      <div className="flex">
        <Link href="https://facebook.com/hashtugs">
          <FaFacebookF className="h-8 w-8 bg-[#3B579D] pt-2 text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/magnaye/">
          <FaLinkedinIn className="h-8 w-8 bg-[#2E78B6] pt-2 text-white" />
        </Link>
        <Link href="https://www.github.com/ratatatatcode">
          <FiGithub className="h-8 w-8 bg-[#414142] pt-2 text-white" />
        </Link>
        <div className="flex h-8 items-center justify-center bg-[#121212]">
          <Link
            href="https://www.magnaye.online/docs/resume.pdf"
            className="px-2 text-sm font-semibold text-white"
          >
            RESUME
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
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
  );
}
