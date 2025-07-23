import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Anirban Das | Google Intern 2026 | Full Stack Developer",
  description:
    "Portfolio of Anirban Das — Full Stack Developer skilled in React, Node.js, and C++. Upcoming Google Summer Intern 2026. Explore projects like Code Fusion and NoteBridge. CSE student at IIT(ISM) Dhanbad | LeetCode | Codeforces | Gofloww Developer.",
  keywords: [
    "Anirban",
    "Anirban Das",
    "Google",
    "Google Intern",
    "Google Summer",
    "Summer Internship",
    "Google Summer Internship 2026",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Web Developer Portfolio",
    "Competitive Programmer",
    "IIT ISM Dhanbad",
    "Code Fusion",
    "NoteBridge",
    "Gofloww",
    "Gofloww Developer",
    "LeetCode",
    "Codeforces",
    "JavaScript",
    "C++",
    "GitHub",
    "LinkedIn",
    "Instagram",
  ],
  authors: [
    {
      name: "Anirban Das",
      url: "https://anirban-das-portfolio.vercel.app",
    },
  ],
  creator: "Anirban Das",
  metadataBase: new URL("https://anirban-das-portfolio.vercel.app"),
  openGraph: {
    title: "Anirban Das | Google Intern 2026 & Full Stack Developer",
    description:
      "Hi, I'm Anirban Das — an upcoming Google Summer Intern 2026 and passionate full stack developer from IIT(ISM) Dhanbad. Explore projects in React, Node.js, MongoDB, and more!",
    url: "https://anirban-das-portfolio.vercel.app",
    siteName: "Anirban Das Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://anirban-das-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anirban Das Portfolio First View",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <Head>
        <link rel="me" href="https://www.instagram.com/anirbangymboy/" />
        <link
          rel="me"
          href="https://www.linkedin.com/in/anirban-das-2014412b9/"
        />
        <link rel="me" href="https://github.com/anirban2005143a" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
