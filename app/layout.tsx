import React from "react";
import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";

import "@/app/globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title:
    "Amanda Santos de Carvalho | Portfólio de Desenvolvedora Frontend e Full Stack",
  description:
    "Portfólio de Amanda Santos de Carvalho, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedora frontend/fullstack com foco em interfaces modernas, usabilidade e produtos digitais de alto impacto.",
  creator: "Amanda Santos de Carvalho",
  applicationName: "amanda.dev",
  keywords: [
    "Amanda Santos de Carvalho",
    "Desenvolvedora Frontend",
    "Desenvolvedora Full Stack",
    "Portfólio",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Java",
    "Python",
    "UX",
    "UI",
    "FATEC",
    "ETEC",
    "Análise e Desenvolvimento de Sistemas",
    "Projetos Web",
    "Experiência do Usuário",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://amanda.dev",
    title:
      "Amanda Santos de Carvalho | Portfólio de Desenvolvedora Frontend e Full Stack",
    description:
      "Conheça os projetos, habilidades e a jornada de Amanda Santos de Carvalho como desenvolvedora frontend/fullstack focada em design, performance e experiência do usuário.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Amanda Santos de Carvalho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Santos de Carvalho | Desenvolvedora Frontend e Full Stack",
    description:
      "Portfólio em português de Amanda Santos de Carvalho, apresentando projetos web, formação em desenvolvimento e habilidades em UX/UI.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
