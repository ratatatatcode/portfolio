import { Dock, DockIcon } from '@/components/magicui/dock';
import { FacebookIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/themeToggle';

export default function DockComponent() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
      <Dock>
        <DockIcon>
          <a
            href="https://facebook.com/hashtugs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://github.com/ratatatatcode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://linkedin.com/in/magnaye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </DockIcon>
        <div className="mx-2 h-6 w-px bg-gray-600" />
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}
