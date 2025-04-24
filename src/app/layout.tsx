"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Musicatta",
 
  openGraph: {
    title: "Musicatta",  
    url: "https://musicatta.vercel.app/",
    siteName: "Musicatta",
    images: [
      {
        url: "https://musicatta.vercel.app/images/preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Imagem de pré-visualização do Musicatta",
      },
    ],
    type: "website",
  },
};



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
