'use client';

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { siteConfig } from '@/data/siteConfig';

export default function GitHubCalendarClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <GitHubCalendar
      username={siteConfig.github.username}
      year={siteConfig.github.contributionYear}
    />
  );
}
