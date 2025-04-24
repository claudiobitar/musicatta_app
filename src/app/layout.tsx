// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import BodyWrapper from "./components/BodyWrapper.tsx"; // ajuste o caminho se necessário
import { TestContext } from "node:test";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musicatta",

  openGraph: {
    title: "Musicatta",
    description: 'Teste',
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
  return (
    <html lang="en" className={inter.className}>
      <BodyWrapper>{children}</BodyWrapper>
    </html>
  );
}
