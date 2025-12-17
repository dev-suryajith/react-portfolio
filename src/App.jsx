import React from 'react'
import './app.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="bg-black text-white scroll-smooth">
        <Header />
        <Hero />
        <div className='grid px-22 md:grid-cols-2 md:gap-30 grid-cols-1'>
          <About />
          <Skills />
        </div>
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App