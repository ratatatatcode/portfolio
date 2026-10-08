'use client';

import { memo, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/data/siteConfig';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <p className="text-brand-dark/60 text-sm" role="status">
        Loading contributions...
      </p>
    ),
  }
);

function GitHubCalendarClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-40">
      {visible && (
        <GitHubCalendar
          username={siteConfig.github.username}
          year={siteConfig.github.contributionYear}
        />
      )}
    </div>
  );
}

export default memo(GitHubCalendarClient);
