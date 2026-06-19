'use client'
import { useState, useEffect } from 'react'
import { testimonials } from '@/lib/data'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive(a => (a + 1) % testimonials.length)
        setFading(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[active]

  return (
    <section style={{ background: 'var(--bg2)', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative quote mark */}
      <div style={{
        position: 'absolute', top: '-80px', left: '40px',
        fontFamily: 'var(--font-cormorant)', fontWeight: 300,
        fontSize: '600px', lineHeight: 1, color: 'transparent',
        WebkitTextStroke: '1px rgba(74,124,89,0.05)',
        userSelect: 'none', pointerEvents: 'none',
      }}>"</div>

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--green-l)', marginBottom: '48px' }}>
            What people say
          </p>
        </RevealOnScroll>

        <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease', minHeight: '160px' }}>
          <blockquote style={{
            fontFamily: 'var(--font-cormorant)', fontWeight: 300,
            fontSize: 'clamp(22px, 3vw, 34px)', lineHeight: 1.5,
            color: 'var(--cream)', fontStyle: 'italic',
            marginBottom: '36px',
          }}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-l)' }}>
            {t.author}
            <span style={{ color: 'var(--cream-dim)', fontWeight: 300, marginLeft: '8px' }}>· {t.location}</span>
          </p>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false) }, 300) }}
              style={{
                width: i === active ? 24 : 8, height: 8,
                borderRadius: 4,
                background: i === active ? 'var(--green-l)' : 'rgba(74,124,89,0.3)',
                border: 'none',
                transform: i === active ? 'scale(1)' : 'scale(1)',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
