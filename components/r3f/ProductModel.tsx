'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props {
  modelPath: string
  speed?: number
}

// Placeholder spheres keyed by product until real .glb files are added
const productColors: Record<string, { body: string; accent: string }> = {
  '/models/ashwagandha.glb': { body: '#8B6914', accent: '#c8933a' },
  '/models/brahmi.glb':      { body: '#4a7c59', accent: '#7db891' },
  '/models/turmeric.glb':    { body: '#d4a017', accent: '#f0c040' },
  '/models/amla.glb':        { body: '#6aaa3a', accent: '#98cc6a' },
}

export default function ProductModel({ modelPath, speed = 0.008 }: Props) {
  const ref = useRef<THREE.Group>(null)
  const colors = productColors[modelPath] ?? { body: '#4a7c59', accent: '#7db891' }

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += speed
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 2]} intensity={0.8} color="#b8dfc7" />
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color={colors.body} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Small detail spheres */}
        {[[0.6, 0.4, 0.3], [-0.5, 0.5, -0.3], [0.3, -0.6, 0.4]].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshStandardMaterial color={colors.accent} roughness={0.4} metalness={0.2} />
          </mesh>
        ))}
      </group>
    </>
  )
}
