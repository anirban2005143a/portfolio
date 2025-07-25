"use client";

import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./project-card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ setProjectLoader }) => {
  const cardRefs  = useRef([]);
  const [isHovered, setisHovered] = useState(false);

  const projects = [
    {
      title: `AI-Powered Indian Legal Judgment Summarization`,
      description: `Instantly <strong>analyze</strong> and <strong>summarize</strong> Indian court judgments using 
    <em>advanced AI models</em>. Built for <strong>legal professionals</strong>, <strong>law students</strong>, and 
    <strong>researchers</strong> who need clarity, speed, and accuracy in legal research.`,
      image: [
        "/projects/legalSummarization/img1.png",
        "/projects/legalSummarization/img2.png",
        "/projects/legalSummarization/img3.png",
        "/projects/legalSummarization/img4.png",
      ], // multiple images for slideshow
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      slideshow: true,
      ongoing: true,
    },
    {
      title: "Code Fusion",
      description: `
    <p><strong>Code Fusion</strong> is an <em>online code editor</em> supporting real-time collaboration, multiple languages, and customizable themes.</p>
    <ul>
      <li>Enables multiple developers to collaborate in real-time with <strong>live cursor tracking</strong> and integrated in-app chat for seamless communication.</li>
      <li>Integrates <strong>auto-completion</strong>, <strong>real-time syntax error detection</strong>, and <strong>persistent code-saving functionality</strong>.</li>
      <li>Offers various themes, <em>multi-language support</em>, and a <strong>collapsible sidebar</strong> for efficient file management.</li>
    </ul>
  `,
      image: [
        "/projects/codeFusion/img1.png",
        "/projects/codeFusion/img2.png",
        "/projects/codeFusion/img3.png",
        "/projects/codeFusion/img4.png",
        "/projects/codeFusion/img5.png",
      ],
      tags: ["React.js", "Flask", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/anirban2005143a/code-Fusion",
      demo: "https://code-fusion-code-collab.vercel.app/",
      slideshow: true,
    },

    {
      title: "NoteBridge",
      description: `
    <p><strong>NoteBridge</strong> is built using <em>React.js</em>, <em>Express.js</em>, <em>MongoDB</em>, and <em>Bootstrap</em>.</p>
    <ul>
      <li>A feature-rich <strong>note-taking and sharing platform</strong> that enables structured organization through folders and facilitates seamless file sharing with controlled access.</li>
      <li>Enables <strong>interactive engagement</strong> through features like <strong>likes</strong>, <strong>comments</strong>, and <strong>shares</strong>.</li>
      <li>Provides a comprehensive profile page displaying the <strong>total number of posts, followers, and following</strong>, along with an organized archive of past posts for easy access and engagement.</li>
    </ul>
  `,
      image: [
        "/projects/noteBridge/img1.png",
        "/projects/noteBridge/img2.png",
        "/projects/noteBridge/img3.png",
        "/projects/noteBridge/img4.png",
        "/projects/noteBridge/img5.png",
        "/projects/noteBridge/img6.png",
        "/projects/noteBridge/img7.png",
        "/projects/noteBridge/img8.png",
      ],
      tags: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
      github: "https://github.com/anirban2005143a/note-bridge",
      demo: "https://notebridge.vercel.app/",
      slideshow: true,
    },
    {
      title: "Movie Flix",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: `<strong>Movie Flix</strong> — <em>Winner of Winter Of Code 6.O</em> in the <strong>Web Development Division</strong>, 
      a one-month long hackathon conducted by <strong>CyberLabs, IIT(ISM) Dhanbad</strong>. Movie Flix is a dynamic movie application 
      where users can discover a wide range of <strong>movies and web series</strong> across different <strong>genres</strong> 
      and <strong>languages</strong>. It features powerful <strong>search functionality</strong>, allowing users to quickly find titles 
      of interest. Users can <strong>rate</strong>, <strong>like</strong>, and <strong>add movies to their wishlist</strong> for 
      future viewing. The platform also includes robust <strong>authentication</strong> to ensure secure and personalized user access, 
      making it a fully engaging entertainment experience.`,
      image: [
        "/projects/movieFlix/img1.png",
        "/projects/movieFlix/img2.png",
        "/projects/movieFlix/img3.png",
        "/projects/movieFlix/img4.png",
        "/projects/movieFlix/img5.png",
        "/projects/movieFlix/img6.png",
        "/projects/movieFlix/img7.png",
        "/projects/movieFlix/img8.png",
        "/projects/movieFlix/img9.png",
      ],
      slideshow: true,
      github: "https://github.com/anirban2005143a/movieflix",
      demo: "https://your-deployed-link.com",
    },
  ];

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="section relative pb-20">
        {/* top image  */}
        <div className=" absolute top-0 right-0  md:w-[500px] w-full ">
          <Image
            alt="top right image"
            height={500}
            width={500}
            src="/flowers/projects/top-right.png"
            className=" w-full"
          />
        </div>

        {/* bottom image  */}
        <div className=" absolute md:bottom-0 -bottom-[350px] -right-5 md:w-[500px] w-full z-10 ">
          <Image
            alt="top right image"
            height={500}
            width={500}
            src="/flowers/projects/bottom-right.png"
            className=" w-full relative "
          />
        </div>

        {/* Gradient Orbs/Balls */}
        <div className="absolute w-full h-full top-0 left-0 overflow-y-visible z-0">
          {/* Large purple orb */}
          <div className="absolute -z-10 -top-20 left-0 w-80 h-80 rounded-full bg-radial from-purple-900 to-indigo-800 opacity-20 blur-3xl"></div>

          {/* Medium indigo orb - top right */}
          <div className="absolute -z-10 top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-indigo-700/20 to-purple-800/15 blur-3xl"></div>

          {/* Small purple orb - middle left */}
          <div className="absolute -z-10 top-1/2 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700/20 to-indigo-600/15 blur-2xl"></div>

          {/* Medium purple orb - bottom right */}
          <div className="absolute -z-10 bottom-10 right-20 w-56 h-56 rounded-full bg-gradient-to-tl from-purple-800/20 to-indigo-700/15 blur-3xl"></div>

          {/* Small indigo orb - bottom left */}
          <div className="absolute -z-10 bottom-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-700/15 blur-2xl"></div>

          {/* Extra small floating orbs */}
          <motion.div
            className="absolute -z-10 top-1/3 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/25 to-indigo-600/20 blur-xl"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-gradient-to-tl from-indigo-500/25 to-purple-600/20 blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>

        {/* card content  */}
        <div className=" px-4 md:px-6 lg:px-8 max-w-[1500px] mx-auto relative md:pt-20 pt-[400px] z-10">
          <motion.div>
            {/* Cards */}
            <div className=" relative flex flex-col items-start  ">
              {projects.map((project, index) => {
                // Create a ref per project
                const ref = useRef(null);
                cardRefs.current[index] = ref.current;

                // Observe the ref
                const isInView = useInView(ref, {
                  once: true,
                  amount: 0.2,
                });
                return (
                  <ProjectCard
                    divref={ref}
                    isInView={isInView}
                    key={index}
                    project={project}
                    index={index}
                  />
                );
              })}

              {/* View all button */}
              {/* <div className=" md:w-[500px] w-full my-10">
                <button
                  onMouseOver={() => setisHovered(true)}
                  onMouseLeave={() => setisHovered(false)}
                  onTouchStart={() => setisHovered(true)}
                  onTouchEnd={() => setisHovered(false)}
                  className={`
                  border-[#ffffff]/20  text-white mx-auto
                  ${isHovered ? " bg-[#1a0826b4] " : " bg-opacity-10 "}
                  flex items-center justify-center gap-2 text-sm font-medium  
                  rounded-full px-6 py-2 border-2 transition-all `}
                >
                  View All Projects
                  <ExternalLink
                    className={`ml-2 w-4 h-4 text-white ${
                      isHovered ? " translate-x-1 " : ""
                    } transition-transform`}
                  />
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
