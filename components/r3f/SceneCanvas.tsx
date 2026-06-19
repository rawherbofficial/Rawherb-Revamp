"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

function SuppressClockWarning() {
    useEffect(() => {
        const originalWarn = console.warn.bind(console);
        console.warn = (...args: unknown[]) => {
            if (typeof args[0] === "string" && args[0].includes("THREE.Clock"))
                return;
            originalWarn(...args);
        };
        return () => {
            console.warn = originalWarn;
        };
    }, []);
    return null;
}

export default function SceneCanvas({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Canvas
            onCreated={({ gl }) => {
                gl.capabilities.getMaxAnisotropy() &&
                    (gl.capabilities as any).maxAnisotropy; // already set via mat.map.anisotropy
            }}
            camera={{ position: [0, 0, 5], fov: 80 }}
            dpr={[1, 2]}
            performance={{ min: 1 }}
            gl={{
                antialias: true,
                alpha: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 0.3,
                outputColorSpace: THREE.SRGBColorSpace,
            }}
            style={{ background: "transparent", width: "100%", height: "100%" }}
        >
            <SuppressClockWarning />
            <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
    );
}
