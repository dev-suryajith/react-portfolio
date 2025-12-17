import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import LiquidEther from './components/LiquidEther'


function App() {
  return (
    <>
      <div className="bg-black text-white scroll-smooth">
        <Header />
        <Hero />

        <div className="relative w-full min-h-[600px] overflow-hidden">
          {/* Liquid Background */}
          <div className="absolute inset-0 z-0">
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={14}
              cursorSize={70}
              isViscous={false}
              viscous={30}
              iterationsViscous={18}
              iterationsPoisson={18}
              resolution={0.35}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={1.4}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-20">
            <About />
            <Skills />
          </div>
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App