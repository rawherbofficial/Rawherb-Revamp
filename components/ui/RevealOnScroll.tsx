'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: 0 | 100 | 200 | 300 | 400
  className?: string
}

export default function RevealOnScroll({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const delayClass = delay ? `reveal-d${delay / 100}` : ''
    el.classList.add('reveal', ...(delayClass ? [delayClass] : []))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
