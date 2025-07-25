"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const About = ({ setAboutLoader }) => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section relative  text-gray-900 ">
      <div className=" px-4 md:pt-[150px] pt-[50px] pb-[100px] md:px-6 lg:px-8 max-w-[1500px] mx-auto">
        {/* top right flower  */}
        <div className=" md:w-[600px] w-full absolute  -top-50 -right-15 z-20">
          <Image
            width={600}
            height={600}
            alt="top left flower"
            src="/flowers/about/bottom-left.png"
            className=" w-full h-full -rotate-10"
          />
        </div>

        <motion.div
          ref={aboutRef}
          style={{
            opacity: aboutInView ? 1 : 0,
            transform: aboutInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {/* Content */}
          <div className=" items-center ">
            {/* Text Content */}
            <div className="md:w-[65%] md:min-w-[500px]  bg-gradient-to-bl from-[#250152a2] to-transparent backdrop-blur-xl p-8 md:px-8 sm:px-5 px-3  rounded-xl shadow-lg border border-white/20  relative">
              {/* Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tl-md" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-br-md" />

              <h3 className="text-2xl font-semibold mb-6 text-[hsl(262.1,83.3%,57.8%)]">
                Who I Am
              </h3>

              <div className="space-y-4">
                {[
                  `I’m a <strong>passionate full-stack developer</strong> currently pursuing my <strong>B.Tech in Computer Science and Engineering at IIT (ISM) Dhanbad</strong>. I love building clean, responsive, and accessible web applications using modern JavaScript frameworks.`,

                  `At <strong>GoFloww</strong>, I’m interning as a <strong>Frontend Developer</strong> — leading the <em>Atom Accounting</em> platform from scratch. I handle <strong>API integrations</strong>, responsive UI, long-form management, and efficient form state handling.`,

                  `I’m also working as a <strong>Project Associate I</strong> on an <strong>IIT Mandi</strong> research project titled <em>“Indian Legal Summarization for Layperson”</em>, focused on building a platform to help people read and understand legal judgments with <strong>AI-powered multilingual summarization</strong> and a <strong>chatbot interface</strong>.`,

                  `Recently selected for the <strong>Google Summer Internship 2026</strong> (SWE role). Outside of tech, I enjoy <em>traveling</em>, <em>sports</em>, and learning how <strong>scalable systems</strong> are designed and optimized.`,
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#7c3bed51]  flex items-center justify-center mt-1">
                      <ChevronRight className="w-5 h-5 text-[hsl(262,100%,79%)]" />
                    </div>
                    <p
                      className=" w-[90%] text-gray-300  leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8 flex gap-3">
                {[
                  ["GitHub", Github, "https://github.com/anirban2005143a"],
                  [
                    "LinkedIn",
                    Linkedin,
                    "https://www.linkedin.com/in/anirban-das-2014412b9/",
                  ],
                ].map(([label, Icon, href], i) => (
                  <a
                    href={href}
                    aria-label={label}
                    key={i}
                    className="rounded-full border-1 border-purple-500 bg-[#33195f89] p-3 text-white hover:bg-[#483d6d8f] hover:bg-opacity-10 hover:text-[#d8c2ff] transition-all group"
                  >
                    <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Blurred floating shapes */}
        <div className="absolute -top-60 right-10 -z-10 md:w-[600px] md:h-[600px] sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] rounded-full blur-3xl bg-[#7c3aed] opacity-10" />
        <div className="absolute top-0 left-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-[#7c3aed] opacity-10" />
        <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-purple-500 opacity-10" />
      </div>
    </section>
  );
};

export default About;
