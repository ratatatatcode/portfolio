'use client';

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubCalendarClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <GitHubCalendar username="ratatatatcode" year={2026} />;
}
