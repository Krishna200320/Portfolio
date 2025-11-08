import { useEffect, useRef, useState } from 'react'
import { aboutData, achievements } from '../data'
import './About.css'

const About = () => {
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

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'certificate':
        return '🏆'
      case 'education':
        return '🎓'
      case 'experience':
        return '💼'
      default:
        return '✨'
    }
  }

  return (
    <section id="about" ref={sectionRef} className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">
          About Me<span className="accent-dot">.</span>
        </h2>
        
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img
              src={aboutData.profileImage}
              alt="Krishna Patel"
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <p className="about-intro">{aboutData.intro}</p>
            <p className="about-story">{aboutData.story}</p>
            <p className="about-current">{aboutData.current}</p>
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="achievements-title">Achievements & Credentials</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon">{getAchievementIcon(achievement.type)}</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-org">{achievement.organization}</p>
                  <p className="achievement-period">{achievement.period}</p>
                  <p className="achievement-desc">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

