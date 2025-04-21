"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Progressbar = () => {

    const [scrollProgress, setScrollProgress] = useState(0)

    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

    }, [])
    

    return (
        <>
            {/* < motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary z-50 origin-left"
                style={{ scaleX: scrollProgress / 100 }}
            /> */}
            <motion.div
                className="fixed top-0 left-1/2 transform -translate-x-1/2 h-1 w-full max-w-screen z-50 origin-center 
             bg-gradient-to-r from-violet-600 via-purple-700 to-violet-600"
                style={{ scaleX: scrollProgress / 100 }}
                transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.3 }}
            />

        </>
    )
}

export default Progressbar