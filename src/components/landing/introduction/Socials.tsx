import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { siteConfig } from '@/data/siteConfig';

export default function SocialLinksComponent() {
  const socialButtonClass =
    'flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:brightness-90';
  const documentButtonClass =
    'inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-br from-brand-orange to-brand-strong px-3.5 text-sm font-medium text-white transition hover:brightness-95';

  return (
    <div className="mt-7 flex flex-col gap-4 border-t border-brand-dark/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-1.5">
        <a
          href={siteConfig.socialLinks.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook profile"
          className={`${socialButtonClass} bg-gradient-to-br from-[#1877F2] to-[#0D5EC7]`}
        >
          <FaFacebookF size={17} />
        </a>
        <a
          href={siteConfig.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className={`${socialButtonClass} bg-gradient-to-br from-[#0A66C2] to-[#004182]`}
        >
          <FaLinkedinIn size={17} />
        </a>
        <a
          href={siteConfig.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className={`${socialButtonClass} bg-gradient-to-br from-[#24292F] to-[#0D1117]`}
        >
          <FiGithub size={18} />
        </a>
        <a
          href={siteConfig.documents.cv}
          aria-label="Open CV"
          className={documentButtonClass}
        >
          CV
        </a>
        <a
          href={siteConfig.documents.resume}
          aria-label="Open resume"
          className={documentButtonClass}
        >
          Resume
        </a>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-dark/70">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center gap-1.5 transition hover:text-brand-strong"
        >
          <IoCall />
          <span>{siteConfig.contact.phone}</span>
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-1.5 transition hover:text-brand-strong"
        >
          <MdEmail />
          <span>{siteConfig.contact.email}</span>
        </a>
      </div>
    </div>
  );
}
