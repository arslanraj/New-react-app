import React from 'react'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Review from "./Review"
import Projects from './Projects'

function WelcomePage() {
  return (
    <div>
        <HeroSection/>
        <Projects/>
        <Review/>
        <Contact/>
      
    </div>
  )
}

export default WelcomePage
