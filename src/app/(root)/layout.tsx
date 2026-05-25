import React from 'react';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4 py-10 antialiased">
      {children}
    </div>
  );
}
