'use client';

import { useEffect, useRef } from 'react';

type VideoPreviewProps = {
  src: string;
  title: string;
};

export default function VideoPreview({ src, title }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let visible = false;

    const updatePlayback = () => {
      if (!visible || document.hidden) {
        video.pause();
        return;
      }

      if (video.getAttribute('src') !== src) video.src = src;
      void video.play().catch(() => {
        // Autoplay can be blocked by the browser; the preview still links to the video.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
        updatePlayback();
      },
      { threshold: [0, 0.1] }
    );
    observer.observe(video);
    document.addEventListener('visibilitychange', updatePlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      aria-label={`${title} preview`}
      className="bg-brand-dark/5 block aspect-[auto_16/9] h-auto w-full rounded-lg object-contain"
      loop
      muted
      playsInline
      preload="none"
    />
  );
}
