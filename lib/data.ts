import type { Product, Testimonial, ProcessStep, NavLink, FooterColumn, Stat } from '@/types'

// ─── Products ─────────────────────────────────────────────────────────────────
export const products: Product[] = [
  { id: 'ashwagandha', name: 'Ashwagandha Root Powder', tag: 'Adaptogen',        description: 'Wild-harvested KSM-66 grade. Stress relief, strength & deep sleep.',      price: 299, modelPath: '/models/ashwagandha.glb', badge: 'Bestseller' },
  { id: 'brahmi',      name: 'Brahmi Whole Leaf',       tag: 'Nootropic',         description: 'Memory, focus & calm clarity. Used in Ayurveda for 3000 years.',          price: 249, modelPath: '/models/brahmi.glb' },
  { id: 'turmeric',   name: 'Lakadong Turmeric',        tag: 'Anti-inflammatory', description: 'Highest curcumin content (7–12%). Raw-ground, zero heat damage.',         price: 349, modelPath: '/models/turmeric.glb', badge: 'New' },
  { id: 'amla',       name: 'Amla Whole Dried',         tag: 'Antioxidant',       description: '20× more Vitamin C than orange. Sun-dried without sulfites.',             price: 199, modelPath: '/models/amla.glb' },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  { id: 0, quote: 'The Ashwagandha from Rawherb is genuinely different — you can smell the difference the moment you open the packet. Three months in, my sleep is transformed.',      author: 'Priya S.',  location: 'Bangalore' },
  { id: 1, quote: "I've tried five different Brahmi brands. Rawherb is the only one that actually tastes like it came from a plant, not a factory.",                                  author: 'Arjun M.',  location: 'Mumbai' },
  { id: 2, quote: 'The Lakadong Turmeric is extraordinary. The color alone tells you something is different. Golden milk every morning now.',                                         author: 'Kavita R.', location: 'Pune' },
]

// ─── Process steps ────────────────────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  { number: '01', label: 'Sourcing',    title: 'Wild Harvest',  body: 'Herbs are hand-picked at peak potency from certified organic farms and wild forests across India.',  iconModelPath: '/models/icons/harvest.glb' },
  { number: '02', label: 'Processing', title: 'Low-Heat Dry',  body: 'Shade-dried below 45°C to preserve volatile oils, enzymes and all active compounds.',               iconModelPath: '/models/icons/drying.glb' },
  { number: '03', label: 'Delivery',   title: 'Direct to You', body: 'Packed in airtight, eco-friendly kraft pouches. Shipped within 24 hours, all across India.',         iconModelPath: '/models/icons/delivery.glb' },
]

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About',    href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Process',  href: '#process' },
  { label: 'Journal',  href: '#journal' },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'Ashwagandha', href: '/products/ashwagandha' },
      { label: 'Brahmi',      href: '/products/brahmi' },
      { label: 'Triphala',    href: '/products/triphala' },
      { label: 'Turmeric',    href: '/products/turmeric' },
      { label: 'View All',    href: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#story' },
      { label: 'Sourcing',  href: '#process' },
      { label: 'Journal',   href: '#journal' },
      { label: 'Contact',   href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping',    href: '#' },
      { label: 'Returns',     href: '#' },
      { label: 'FAQ',         href: '#' },
      { label: 'Track Order', href: '#' },
    ],
  },
]

// ─── Story stats ──────────────────────────────────────────────────────────────
export const storyStats: Stat[] = [
  { value: '100%', label: 'Additive free' },
  { value: '4+',   label: 'Years sourcing' },
  { value: '12K+', label: 'Happy customers' },
]
