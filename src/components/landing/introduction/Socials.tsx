import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { siteConfig } from '@/data/siteConfig';

export default function SocialLinksComponent() {
  return (
    <div className="mt-7 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <a
          href={siteConfig.socialLinks.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook profile"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1877F2] text-white transition hover:bg-[#145DBF]"
        >
          <FaFacebookF size={17} />
        </a>
        <a
          href={siteConfig.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0A66C2] text-white transition hover:bg-[#084C91]"
        >
          <FaLinkedinIn size={17} />
        </a>
        <a
          href={siteConfig.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-[#24292F] text-white transition hover:bg-[#111827]"
        >
          <FiGithub size={18} />
        </a>
        <a
          href={siteConfig.documents.cv}
          aria-label="Open CV"
          className="ml-1 inline-flex items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-200"
        >
          CV
        </a>
        <a
          href={siteConfig.documents.resume}
          aria-label="Open resume"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-200"
        >
          Resume
        </a>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center gap-1.5 transition hover:text-blue-700"
        >
          <IoCall />
          <span>{siteConfig.contact.phone}</span>
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-1.5 transition hover:text-blue-700"
        >
          <MdEmail />
          <span>{siteConfig.contact.email}</span>
        </a>
      </div>
    </div>
  );
}
