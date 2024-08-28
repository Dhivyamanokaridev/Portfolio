import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Experience from './components/Experience'

const App = () => {
  return (
    <div>
<Header />
      <main>
        <About />
        <Skills/>
        <Projects />
        <Experience/> 
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
