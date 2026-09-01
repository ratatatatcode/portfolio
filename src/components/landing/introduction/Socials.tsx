import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { siteConfig } from '@/data/siteConfig';

export default function SocialLinksComponent() {
  return (
    <div className="mt-2 mb-4 flex flex-wrap gap-2 md:mb-0">
      <div className="flex">
        <Link href={siteConfig.socialLinks.facebook} aria-label="Facebook profile">
          <FaFacebookF className="h-8 w-8 bg-[#0a0a0a] pt-2 text-white" />
        </Link>
        <Link href={siteConfig.socialLinks.linkedin} aria-label="LinkedIn profile">
          <FaLinkedinIn className="h-8 w-8 bg-[#0a0a0a] pt-2 text-white" />
        </Link>
        <Link href={siteConfig.socialLinks.github} aria-label="GitHub profile">
          <FiGithub className="h-8 w-8 bg-[#0a0a0a] pt-2 text-white" />
        </Link>
        <div className="flex h-8 items-center justify-center bg-[#0a0a0a]">
          <Link
            href={siteConfig.documents.cv}
            className="border-r border-gray-100 px-2 text-sm font-semibold text-white"
          >
            CV
          </Link>
          <Link
            href={siteConfig.documents.resume}
            className="px-2 text-sm font-semibold text-white"
          >
            RESUME
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <IoCall />
          <p className="text-xs">{siteConfig.contact.phone}</p>
        </div>
        <div className="flex items-center gap-1">
          <MdEmail />
          <p className="text-xs">{siteConfig.contact.email}</p>
        </div>
      </div>
    </div>
  );
}
