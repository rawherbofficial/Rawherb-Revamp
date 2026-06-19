import { HERO_LEAVES } from '@/constants/hero'

const LeafSVG = () => (
  <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
    <path d="M8 27 C8 27 0 18 0 10 C0 4.5 3.6 0 8 0 C12.4 0 16 4.5 16 10 C16 18 8 27 8 27Z" fill="rgba(74,124,89,0.4)" />
  </svg>
)

export default function HeroLeaves() {
  return (
    <>
      {HERO_LEAVES.map((leaf, i) => (
        <div key={i} style={{
          position: 'absolute', left: leaf.left, top: leaf.top,
          animation: `leafDrift ${leaf.dur} ${leaf.delay} linear infinite`,
          opacity: 0, zIndex: 2, pointerEvents: 'none',
        }}>
          <LeafSVG />
        </div>
      ))}
    </>
  )
}
