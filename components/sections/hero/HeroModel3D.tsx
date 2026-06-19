"use client";
import dynamic from "next/dynamic";
import { useDevice } from "@/lib/hooks/useDevice";
import { useBreakpoint } from "@/lib/hooks/useBreakPoint";

const SceneCanvas = dynamic(() => import("@/components/r3f/SceneCanvas"), {
    ssr: false,
    loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

import HeroModel from "@/components/r3f/HeroModel";
import ParticleField from "@/components/r3f/ParticleField";

interface Props {
    mouseX: number;
    mouseY: number;
    offsetX: number;
    offsetY: number;
}

export default function HeroModel3D({
    mouseX,
    mouseY,
    offsetX,
    offsetY,
}: Props) {
    const { isLowEnd, isMobile } = useDevice();
    const bp = useBreakpoint();

    return (
        <div
            style={{
                position: "absolute",
                top: bp === "mobile" ? "5%" : "18%",
                left: bp === "mobile" ? "50%" : "75%",
                transform:
                    bp === "mobile"
                        ? `translate(-50%, 0)`
                        : `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`,
                width: bp === "mobile" ? 260 : 300,
                height: bp === "mobile" ? 260 : 500,
                zIndex: 10,
                transition: "transform 0.15s linear",
            }}
        >
            {!isLowEnd && !isMobile ? (
                <SceneCanvas>
                    <HeroModel mouseX={mouseX} mouseY={mouseY} />
                    <ParticleField />
                </SceneCanvas>
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background:
                            "radial-gradient(circle, rgba(74,124,89,0.15) 0%, transparent 70%)",
                        borderRadius: "50%",
                    }}
                />
            )}
        </div>
    );
}
