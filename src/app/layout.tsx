import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portafolio | Desarrollador Frontend",
  description: "Portafolio personal de un desarrollador frontend especializado en React, Next.js y TypeScript. Descubre mis proyectos y habilidades.",
  keywords: ["portafolio", "desarrollador", "frontend", "React", "Next.js", "TypeScript", "JavaScript"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portafolio.vercel.app",
    title: "Mi Portafolio | Desarrollador Frontend",
    description: "Portafolio personal de un desarrollador frontend especializado en React, Next.js y TypeScript.",
    siteName: "Mi Portafolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio | Desarrollador Frontend",
    description: "Portafolio personal de un desarrollador frontend especializado en React, Next.js y TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
