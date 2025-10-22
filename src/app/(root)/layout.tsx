import React from 'react';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex min-h-screen w-full flex-col items-center justify-start gap-10 px-4 py-10 antialiased md:px-[25%]">
      {children}
    </div>
  );
}
