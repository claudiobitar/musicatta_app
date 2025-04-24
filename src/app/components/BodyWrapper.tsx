// src/components/BodyWrapper.tsx
"use client";

import { usePathname } from "next/navigation";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <body className={isLoginPage ? "bg-gray-800" : "bg-black"} style={{ overflowX: "hidden" }}>
      <main className="w-full lg:w-[1000px] lg:mx-auto">{children}</main>
    </body>
  );
}
