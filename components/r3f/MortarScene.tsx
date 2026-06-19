'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function MortarScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.003
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 2]} intensity={1.0} color="#b8dfc7" />
      <group ref={groupRef}>
        {/* Mortar bowl */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.7, 0.5, 0.6, 32, 1, true]} />
          <meshStandardMaterial color="#2d2d2d" roughness={0.6} metalness={0.3} side={THREE.DoubleSide} />
        </mesh>
        {/* Mortar base */}
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[0.5, 0.45, 0.1, 32]} />
          <meshStandardMaterial color="#2d2d2d" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Pestle */}
        <mesh position={[0.2, 0.4, 0.1]} rotation={[0.4, 0, -0.3]}>
          <cylinderGeometry args={[0.07, 0.12, 1.2, 16]} />
          <meshStandardMaterial color="#3a3a3a" roughness={0.5} metalness={0.3} />
        </mesh>
        {/* Herb powder in bowl */}
        <mesh position={[0, -0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.58, 32]} />
          <meshStandardMaterial color="#c8933a" roughness={0.95} metalness={0} />
        </mesh>
      </group>
    </>
  )
}
