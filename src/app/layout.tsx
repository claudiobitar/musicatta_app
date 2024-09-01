"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login"; // Verifica se está na página de login

  return (
    <html lang="en" className={`${isLoginPage ? "bg-gray-800" : "bg-black"}`}>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <main className="w-full lg:w-[1000px] lg:mx-auto">
          {children} {/* Conteúdo das páginas */}
        </main>
      </body>
    </html>
  );
}
