"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";
import ClientAnalytics from "@/components/layouts/ClientAnalytics";
import Script from "next/script";
import { useEffect } from "react";
import { getActiveColorPalette } from "@/constants/palettes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const palette = getActiveColorPalette("random");
    document.documentElement.style.setProperty("--primary-color", palette.primary);
    document.documentElement.style.setProperty("--secondary-color", palette.secondary);
  }, []);

  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1598409679842109"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
        <ClientAnalytics />
      </body>
    </html>
  );
}
