'use client'
import { useEffect } from 'react'

export default function ScrollAnimationInit() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.fade-up, .fade-in')

    // Show elements already in or near the viewport immediately
    const vh = window.innerHeight
    const inView: HTMLElement[] = []
    const below: HTMLElement[] = []

    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top
      if (top < vh + 80) {
        inView.push(el)
      } else {
        below.push(el)
      }
    })

    // Instantly reveal in-view elements (staggered by their delay class)
    inView.forEach((el) => el.classList.add('visible'))

    // Observe elements below the fold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 80px 0px' }
    )

    below.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
