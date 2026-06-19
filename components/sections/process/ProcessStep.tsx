import RevealOnScroll from '@/components/ui/RevealOnScroll'
import type { ProcessStep as ProcessStepType } from '@/types'
import type { FC } from 'react'

interface Props {
  step: ProcessStepType
  index: number
  Icon: FC
}

export default function ProcessStep({ step, index, Icon }: Props) {
  return (
    <RevealOnScroll delay={(index * 100) as 0 | 100 | 200}>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          background: 'rgba(74,124,89,0.06)',
          border: '1px solid rgba(74,124,89,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          animation: `float 6s ease-in-out ${index * 2}s infinite`,
        }}>
          <Icon />
        </div>

        <p style={{
          fontFamily: 'var(--font-inter)', fontWeight: 300,
          fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--green-l)', marginBottom: '8px',
        }}>
          {step.number} · {step.label}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-cormorant)', fontWeight: 300,
          fontSize: '28px', color: 'var(--cream)', marginBottom: '12px',
        }}>
          {step.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-inter)', fontWeight: 300,
          fontSize: '13px', lineHeight: 1.7, color: 'var(--cream-dim)',
          maxWidth: 260, margin: '0 auto',
        }}>
          {step.body}
        </p>
      </div>
    </RevealOnScroll>
  )
}
