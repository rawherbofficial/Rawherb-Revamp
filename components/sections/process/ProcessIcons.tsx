export const HarvestIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 38 C20 38 4 28 4 16 C4 8 11.2 2 20 2 C28.8 2 36 8 36 16 C36 28 20 38 20 38Z" stroke="var(--green-l)" strokeWidth="1.5" fill="none"/>
    <path d="M20 38 L20 16" stroke="var(--green-l)" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M20 22 C20 22 12 20 10 14" stroke="var(--green-l)" strokeWidth="1"/>
    <path d="M20 26 C20 26 28 24 30 18" stroke="var(--green-l)" strokeWidth="1"/>
  </svg>
)

export const DryingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="8" stroke="var(--green-l)" strokeWidth="1.5"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <line
        key={i}
        x1={20 + 12 * Math.cos((deg * Math.PI) / 180)}
        y1={20 + 12 * Math.sin((deg * Math.PI) / 180)}
        x2={20 + 16 * Math.cos((deg * Math.PI) / 180)}
        y2={20 + 16 * Math.sin((deg * Math.PI) / 180)}
        stroke="var(--green-l)"
        strokeWidth="1.5"
      />
    ))}
  </svg>
)

export const DeliveryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14 L20 8 L34 14 L34 30 L20 36 L6 30 Z" stroke="var(--green-l)" strokeWidth="1.5" fill="none"/>
    <path d="M6 14 L20 20 L34 14" stroke="var(--green-l)" strokeWidth="1"/>
    <path d="M20 20 L20 36" stroke="var(--green-l)" strokeWidth="1"/>
    <path d="M13 11 L27 17" stroke="var(--green-l)" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
)

export const PROCESS_ICONS = [HarvestIcon, DryingIcon, DeliveryIcon]
