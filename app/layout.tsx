import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA Parental Digital Survival Kit",
  description:
    "Empowering parents in the digital age with tools, knowledge, and confidence to raise safe, smart, and responsible digital citizens.",
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background text-text">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
