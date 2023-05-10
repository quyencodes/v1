import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Intro from './Components/Intro.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
