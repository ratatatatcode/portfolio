import React from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col-start min-h-screen w-full antialiased">
      {children}
    </div>
  );
}
