"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

import dynamic from "next/dynamic";

// Dynamic imports for client-only components
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const ScrollProgress = dynamic(() => import("../components/ScrollProgress"), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider   attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 container mx-auto px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
