// ─── Product ──────────────────────────────────────────────────────────────────
export interface Product {
  id: string
  name: string
  tag: string
  description: string
  price: number
  modelPath: string
  badge?: 'Bestseller' | 'New' | 'Limited'
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: number
  quote: string
  author: string
  location: string
}

// ─── Process ──────────────────────────────────────────────────────────────────
export interface ProcessStep {
  number: string
  label: string
  title: string
  body: string
  iconModelPath: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string
  label: string
}
