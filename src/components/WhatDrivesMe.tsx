import { useEffect, useRef, useState } from 'react'
import { drives } from '../data'
import './WhatDrivesMe.css'

const WhatDrivesMe = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="what-drives-me"
      ref={sectionRef}
      className={`what-drives-me-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <h2 className="section-title">
          What Drives Me<span className="accent-dot">.</span>
        </h2>
        <div className="drives-grid">
          {drives.map((drive, index) => (
            <div
              key={index}
              className="drive-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="drive-icon">{drive.icon}</div>
              <h3 className="drive-title">{drive.title}</h3>
              <p className="drive-description">{drive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatDrivesMe

