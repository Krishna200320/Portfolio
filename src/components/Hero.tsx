import { useEffect, useState } from 'react'
import { heroData } from '../data'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">{heroData.name}</h1>
          <p className="hero-title">{heroData.title}</p>
          <p className="hero-subtitle">{heroData.subtitle}</p>
          <p className="hero-location">📍 {heroData.location}</p>
          <button className="hero-cta" onClick={scrollToAbout}>
            Explore My Work
            <span className="arrow">↓</span>
          </button>
        </div>
      </div>
      <div className="cloud-container">
        <div className="cloud cloud-1">☁️</div>
        <div className="cloud cloud-2">☁️</div>
        <div className="cloud cloud-3">☁️</div>
        <div className="cloud cloud-4">☁️</div>
      </div>
    </section>
  )
}

export default Hero

