import { useEffect } from 'react'

export function useParallax(strength = 20) {
  useEffect(() => {
    const bg = document.querySelector('.space-bg')
    if (!bg) {
      console.warn('[useParallax] .space-bg не найден в DOM')
      return
    }

    const handleMouseMove = (e) => {
      const relX = (e.clientX / window.innerWidth  - 0.5) * 2
      const relY = (e.clientY / window.innerHeight - 0.5) * 2

      bg.style.setProperty('--parallax-x', `${-relX * strength}px`)
      bg.style.setProperty('--parallax-y', `${-relY * strength}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [strength])
}