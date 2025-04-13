import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroSection from './components/HeroSection'
import { FloatingNav } from './components/floating-nav'
import About from './components/About'
import { BackgroundGradient } from './components/background-gradient'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' overflow-hidden'>
       <BackgroundGradient />
      <FloatingNav />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
      <Contact/>
    </div>
     
    </>
  )
}

export default App
