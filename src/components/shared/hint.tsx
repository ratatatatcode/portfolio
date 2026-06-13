'use client';

import { useEffect, useState } from 'react';

type AutoHideHintProps = {
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

export default function AutoHideHint({ children, duration = 5000, className }: AutoHideHintProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <p className={`${className} text-muted-foreground text-xs`}>{children}</p>;
}
