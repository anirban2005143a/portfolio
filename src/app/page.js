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
import { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  //   useEffect(() => {
  //     gsap.to("body", {
  //         backgroundColor: "red",
  //         scrollTrigger: {
  //             trigger: document.body,
  //             start: "top top",
  //             end: "bottom bottom",
  //             scrub: true
  //         }
  //     })
  // }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {

      console.log(window.scrollY)
    })
  }, [])


  return (
    <>
      <div className=' overflow-hidden'>
        <Progressbar />
        {/* <BackgroundGradient /> */}
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
