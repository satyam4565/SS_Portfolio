import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './AnimatedBackground.css';

const App = () => {
  return (
    <>
      {/* 🔹 Background Blur Layer */}
      <div className="background-blur"></div>

      {/* 🔹 Fireflies Layer */}
      <div className="firefly-wrapper">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>

      {/* 🔹 Main Content */}
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
