import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen — Full Stack Developer & Designer",
  description:
    "Portfolio of Alex Chen, a full-stack developer specializing in React, Next.js, and modern web technologies. Building beautiful, performant digital experiences.",
  keywords: ["full stack developer", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen — Full Stack Developer",
    description: "Building beautiful, performant digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
