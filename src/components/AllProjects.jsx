"use client";

import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./project-card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const AllProjects = ({ setProjectLoader }) => {
  const cardRefs = useRef([]);
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="section relative pb-20 bg-black">
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
            <div className=" relative grid md:grid-cols-2  ">
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
