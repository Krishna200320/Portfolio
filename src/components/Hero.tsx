import { useEffect, useState } from 'react'
import { heroData } from '../data'
import Sparkles from './Sparkles'
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
          <div className="hero-name-container">
            <h1 className="hero-name">{heroData.name}</h1>
            <Sparkles
              particleColor="#FF9900"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              speed={1}
            />
          </div>
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
        <div className="cloud cloud-5">☁️</div>
        <div className="cloud cloud-6">☁️</div>
      </div>
    </section>
  )
}

export default Hero

