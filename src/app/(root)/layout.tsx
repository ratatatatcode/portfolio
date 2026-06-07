import React from 'react';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-6 antialiased md:flex-row">
      {children}
    </div>
  );
}
