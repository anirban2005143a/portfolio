import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik',
});

export const metadata = {
  title: "Anirban Das | Full Stack Developer",
  description: "Portfolio of Anirban Das – React, Node.js, Full Stack Developer.",
  keywords: "Anirban Das, web developer, React, Node.js, portfolio, full stack",
  authors: [{ name: "Anirban Das", url: "https://anirban-das-portfolio.vercel.app" }],
  creator: "Anirban Das",
  metadataBase: new URL("https://anirban-das-portfolio.vercel.app"),
  openGraph: {
    title: "Anirban Das | Full Stack Developer",
    description: "Explore projects built by Anirban Das using modern web technologies.",
    url: "https://anirban-das-portfolio.vercel.app",
    siteName: "Anirban Das Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
