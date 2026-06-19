/** CSS variable names — use these instead of raw hex anywhere in component logic */
export const COLOR = {
  bg:       'var(--bg)',
  bg2:      'var(--bg2)',
  green:    'var(--green)',
  greenL:   'var(--green-l)',
  greenXL:  'var(--green-xl)',
  amber:    'var(--amber)',
  cream:    'var(--cream)',
  creamDim: 'var(--cream-dim)',
} as const

/** Raw hex values — only needed for Three.js / canvas (no CSS vars there) */
export const HEX = {
  bg:      '#080a06',
  green:   '#4a7c59',
  greenL:  '#7db891',
  greenXL: '#b8dfc7',
  amber:   '#c8933a',
  cream:   '#e8dfc8',
} as const

export const FONT = {
  display: 'var(--font-cormorant)',
  body:    'var(--font-inter)',
} as const

export const TRANSITION = {
  smooth: 'cubic-bezier(0.16,1,0.3,1)',
} as const
