import React from 'react';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 antialiased md:flex-row md:gap-0">
      {children}
    </div>
  );
}
