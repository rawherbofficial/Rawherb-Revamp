'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const count = 200
    const positions  = new Float32Array(count * 3)
    const velocities = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 8 * Math.cbrt(Math.random())
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      velocities[i] = 0.002 + Math.random() * 0.003
    }
    return { positions, velocities }
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    return geo
  }, [positions])

  useFrame(() => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < 200; i++) {
      pos[i * 3 + 1] += velocities[i]
      if (pos[i * 3 + 1] > 8) pos[i * 3 + 1] = -8
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#7db891" size={0.04} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}
