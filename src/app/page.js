"use client"

import About from "@/components/About";
import { BackgroundGradient } from "@/components/background-gradient";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/floating-nav";
import HeroSection from "@/components/HeroSection";
import Progressbar from "@/components/Progressbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Model from "@/model/model";
import { useEffect, useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  return (
    <>
      <div className={` bg-black overflow-hidden`}> 
        <Progressbar />
        <FloatingNav />
        <HeroSection />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Model />
      </div> 

    </>
  );
}
