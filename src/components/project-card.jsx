"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export function ProjectCard({
  project,
  index,
  onMouseEnter,
  onMouseLeave,
  divref,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={divref}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={` md:w-[500px] py-5 -translate-x-[200px] opacity-0 border-white ${
        index < 2 ? " border-b-2 " : ""
      }`}
    >
      <Card className="overflow-hidden flex flex-col relative border-0 shadow-xl   group">
        <div className=" relative bg-gradient-to-b from-violet-900/60 to-transparent backdrop-blur-sm">
          {/* Corner accents */}
          {[
            "top-0 left-0 rounded-tl-md border-t-2 border-l-2",
            "top-0 right-0 rounded-tr-md border-t-2 border-r-2",
            "bottom-0 left-0 rounded-bl-md border-b-2 border-l-2",
            "bottom-0 right-0 rounded-br-md border-b-2 border-r-2",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute w-4 h-4 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity ${pos}`}
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />
          ))}

          <div className="relative aspect-video overflow-hidden rounded-md rounded-b-none">
            {/* Hover overlay gradient */}
            <div
              className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#000000] to-[#00000006] z-10 opacity-0 transition-opacity duration-250"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
            {/* sliding auto animated images  */}
            {project.slideshow ? (
              <SlidingImageCarousel images={project.image} />
            ) : (
              <Image
                fill
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="object-cover transition-transform duration-500 w-full h-full z-0"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
              />
            )}

            {/* Overlay buttons */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            >
              <div className="flex gap-3 w-full">
                {project.github && (
                  <button
                    className="flex h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 rounded-full bg-zinc-900/80 text-purple-400 border border-purple-600 hover:bg-purple-800/10 hover:text-purple-300 transition-all"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <a
                      target="_blank"
                      href={project.github}
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      <p>Code</p>
                    </a>
                  </button>
                )}
                {project.demo && (
                  <button
                    className="flex h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 rounded-full bg-zinc-900/80 text-purple-400 border border-purple-600 hover:bg-purple-800/10 hover:text-purple-300 transition-all"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <a
                      target="_blank"
                      href={project.demo}
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <p>Demo</p>
                    </a>
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div whileHover={{ y: -8 }}>
            <div className="flex flex-col  flex-grow p-6 z-0">
              <h3 className="text-xl font-medium mb-2 text-violet-500 inline-block">
                <strong > {project.title}</strong>
                 {project.ongoing && (
                <span className=" ml-2 inline-block bg-violet-800 text-white text-xs tracking-[1px] font-medium px-2 py-1 rounded-full z-30 shadow-md">
                  Ongoing
                </span>
              )}
              </h3>
             
              <p
                className="text-zinc-400 mb-4 flex-grow"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="
                    inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2
                     focus:ring-ring focus:ring-offset-2
                    bg-purple-800/20 text-purple-300 border border-purple-600 hover:bg-violet-800/40 transition"
                  >
                    <em>{tag}</em>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

const SlidingImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 1s pause + 2s transition approx
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover"
          animate={{
            x: i === index ? 0 : i < index ? "-100%" : "100%",
            opacity: i === index ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
