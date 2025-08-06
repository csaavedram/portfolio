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
  title: "Mi Portafolio | Desarrollador Fullstack",
  description: "Portafolio personal de un desarrollador fullstack. Descubre mis proyectos y habilidades.",
  keywords: ["portafolio", "desarrollador", "fullstack"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portafolio.vercel.app",
    title: "Mi Portafolio | Desarrollador Fullstack",
    description: "Portafolio personal de un desarrollador fullstack",
    siteName: "Mi Portafolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio | Desarrollador Fullstack",
    description: "Portafolio personal de un desarrollador fullstack",
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
