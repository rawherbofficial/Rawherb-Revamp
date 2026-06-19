"use client";
import { useRef } from "react";

interface Props {
    letterOffsetX: number;
    letterOffsetY: number;
}

export default function HeroBackground({
    letterOffsetX,
    letterOffsetY,
}: Props) {
    return (
        <>
            {/* Giant R letterform */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${letterOffsetX}px), calc(-50% + ${letterOffsetY}px))`,
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 400,
                    fontSize: "clamp(280px, 45vw, 600px)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(74,124,89,0.12)",
                    zIndex: 0,
                    transition: "transform 0.1s linear",
                }}
            >
                R
            </div>

            {/* Orbit ring */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-60px",
                    marginLeft: "-210px",
                    width: 420,
                    height: 120,
                    border: "1px solid rgba(74,124,89,0.25)",
                    borderRadius: "50%",
                    animation: "orbitRing 14s linear infinite",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        width: 6,
                        height: 6,
                        marginTop: -3,
                        borderRadius: "50%",
                        background: "var(--green-l)",
                        boxShadow: "0 0 8px var(--green-l)",
                    }}
                />
            </div>

            {/* Glow orb */}
            <div
                style={{
                    position: "absolute",
                    top: "23%",
                    left: "50%",
                    width: 500,
                    height: 500,
                    transform: "translateX(-50%)",
                    background:
                        "radial-gradient(circle, rgba(74,124,89,0.4) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "glowPulse 4s ease-in-out infinite",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />
        </>
    );
}
