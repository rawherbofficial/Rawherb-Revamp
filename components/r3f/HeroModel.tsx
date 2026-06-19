"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

interface Props {
    mouseX: number;
    mouseY: number;
}

// Placeholder geometry until real .glb is added
export default function HeroModel({ mouseX, mouseY }: Props) {
    const { scene } = useGLTF("/models/pouch2.glb");
    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        if (!scene) return;
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        scene.position.sub(center);
        scene.scale.setScalar(6 / maxDim);
    }, [scene]);

    scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];
            materials.forEach((m) => {
                const mat = m as THREE.MeshStandardMaterial;
                if (mat.map) {
                    mat.map.colorSpace = THREE.SRGBColorSpace;
                    mat.map.minFilter = THREE.LinearFilter;
                    mat.map.magFilter = THREE.LinearFilter;
                    mat.map.anisotropy = 16; // ← main fix for blurriness at angles
                    mat.map.needsUpdate = true;
                }
                if (mat.emissiveMap)
                    mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
                mat.needsUpdate = true;
            });
        }
    });

    useFrame(() => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y += 0.003;
        groupRef.current.rotation.x +=
            (mouseY * 0.1 - groupRef.current.rotation.x) * 0.05;
    });

    return (
        <>
            <ambientLight intensity={0.8} color="#ffffff" />
            <directionalLight
                position={[5, 5, 5]}
                intensity={3}
                color="#ffffff"
            />
            <directionalLight
                position={[-5, 3, 2]}
                intensity={1.5}
                color="#ffffff"
            />
            <spotLight
                position={[0, 8, 4]}
                intensity={4}
                angle={0.4}
                penumbra={0.5}
                color="#ffffff"
            />
            <Environment preset="warehouse" background={false} />
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
                <group ref={groupRef}>
                    <primitive object={scene} scale={1} />
                </group>
            </Float>
        </>
    );
}

useGLTF.preload("models/pouch2.glb");
