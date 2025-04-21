"use client"

import About from "@/components/About";
import { BackgroundGradient } from "@/components/background-gradient";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/floating-nav";
import HeroSection from "@/components/HeroSection";
import Progressbar from "@/components/Progressbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=' overflow-hidden'>
        <Progressbar />
        <BackgroundGradient />
        <FloatingNav />
        <HeroSection />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>

    </>
  );
}
