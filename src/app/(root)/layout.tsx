import React from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 flex-col items-center justify-start min-h-screen w-full antialiased pt-10 mt-4 p-4 md:px-[25%]">
      {children}
    </div>
  );
}
