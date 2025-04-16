import { useState } from 'react'
import HeroSection from './components/HeroSection'
import { FloatingNav } from './components/floating-nav'
import About from './components/About'
import { BackgroundGradient } from './components/background-gradient'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Progressbar from './components/Progressbar'

function App() {

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
  )
}

export default App
