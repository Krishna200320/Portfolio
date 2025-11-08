import { useEffect, useRef } from 'react'
import './Sparkles.css'

interface SparklesProps {
  className?: string
  particleColor?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  speed?: number
}

const Sparkles = ({
  className = '',
  particleColor = '#FFFFFF',
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  speed = 1,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      life: number
      maxLife: number
    }

    const particles: Particle[] = []
    const particleCount = Math.floor((particleDensity / 100) * 50)

    // Parse color to RGB
    const parseColor = (color: string): [number, number, number] => {
      if (color.startsWith('#')) {
        const hex = color.slice(1)
        const r = parseInt(hex.slice(0, 2), 16)
        const g = parseInt(hex.slice(2, 4), 16)
        const b = parseInt(hex.slice(4, 6), 16)
        return [r, g, b]
      }
      return [255, 255, 255]
    }

    const [r, g, b] = parseColor(particleColor)

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * 0.5 * speed,
        speedY: (Math.random() - 0.5) * 0.5 * speed,
        opacity: Math.random() * 0.5 + 0.5,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update particle
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.life += 1

        // Reset particle if it's off screen or life expired
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height ||
          particle.life > particle.maxLife
        ) {
          particles[index] = createParticle()
        }

        // Fade in and out based on life
        const lifeRatio = particle.life / particle.maxLife
        let opacity = particle.opacity
        if (lifeRatio < 0.2) {
          opacity = particle.opacity * (lifeRatio / 0.2)
        } else if (lifeRatio > 0.8) {
          opacity = particle.opacity * ((1 - lifeRatio) / 0.2)
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = opacity
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
        ctx.fill()
        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particleColor, minSize, maxSize, particleDensity, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`sparkles-canvas ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default Sparkles

