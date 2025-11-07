import { useEffect, useRef, useState } from 'react'
import { techStack } from '../data'
import './TechStack.css'

const TechStack = () => {
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
    <section id="tech-stack" ref={sectionRef} className={`tech-stack-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">
          My Cloud Tech Stack<span className="accent-dot">.</span>
        </h2>
        <div className="tech-grid">
          {techStack.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="tech-category-container"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <span className="spark spark-1">✨</span>
              <span className="spark spark-2">✨</span>
              <span className="spark spark-3">✨</span>
              <span className="spark spark-4">✨</span>
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-items">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="tech-item"
                    style={{ animationDelay: `${(categoryIndex * 0.15 + itemIndex * 0.05)}s` }}
                  >
                    <span className="tech-icon">{item.icon}</span>
                    <span className="tech-name">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

