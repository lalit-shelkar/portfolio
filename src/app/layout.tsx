import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Lalit Shelkar | Software Developer at Cognizant",
  description:
    "Portfolio of Lalit Shelkar — Software Developer at Cognizant with 1+ year of experience in Java, Spring Boot, and enterprise application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="page-grid min-h-screen font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
