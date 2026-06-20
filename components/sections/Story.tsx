"use client";
import dynamic from "next/dynamic";
import { useDevice } from "@/lib/hooks/useDevice";
import { storyStats } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const SceneCanvas = dynamic(() => import("@/components/r3f/SceneCanvas"), {
    ssr: false,
    loading: () => null,
});
const MortarScene = dynamic(() => import("@/components/r3f/MortarScene"), {
    ssr: false,
    loading: () => null,
});

export default function Story() {
    const { isLowEnd, isMobile } = useDevice();

    return (
        <section
            id="story"
            className="section-pad"
            style={{ maxWidth: 1300, margin: "0 auto" }}
        >
            <div className="grid-cols-2 items-center">
                {/* Visual col */}
                <RevealOnScroll>
                    <div style={{ height: 560, position: "relative" }}>
                        {/* Grid SVG decoration */}
                        {/* <svg
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0.08,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 40 0 L 0 0 0 40"
                                        fill="none"
                                        stroke="var(--green)"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#grid)"
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="120"
                                fill="none"
                                stroke="var(--green)"
                                strokeWidth="0.5"
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="200"
                                fill="none"
                                stroke="var(--green)"
                                strokeWidth="0.5"
                            />
                        </svg> */}

                        {/* 3D mortar */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                            }}
                        >
                            {!isLowEnd && !isMobile ? (
                                <>
                                    {/* Glow backdrop — matches Hero's glow orb (blurred, soft) */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "35%",
                                            left: "50%",
                                            width: 400,
                                            height: 400,
                                            transform: "translate(-50%, -50%)",
                                            background:
                                                "radial-gradient(circle, rgba(74,124,89,0.4) 0%, transparent 70%)",
                                            filter: "blur(40px)",
                                            animation:
                                                "glowPulse 4s ease-in-out infinite",
                                            zIndex: 1,
                                            pointerEvents: "none",
                                        }}
                                    />
                                    {/* 3D canvas — unchanged size/position */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "-20%",
                                            left: "50%",
                                            width: "100%",
                                            height: "100%",
                                            transform: "translateX(-50%)",
                                            zIndex: 1,
                                            color: "transparent",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <SceneCanvas>
                                            <MortarScene />
                                        </SceneCanvas>
                                    </div>
                                </>
                            ) : (
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 400,
                                            height: 400,
                                            borderRadius: "50%",
                                            background:
                                                "radial-gradient(circle, rgba(74,124,89,0.18) 0%, transparent 70%)",
                                            filter: "blur(40px)",
                                            animation:
                                                "glowPulse 4s ease-in-out infinite",
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Stat card */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 24,
                                right: 24,
                                background: "rgba(74,124,89,0.12)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(74,124,89,0.2)",
                                padding: "20px 28px",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontWeight: 300,
                                    fontSize: "40px",
                                    color: "var(--cream)",
                                    lineHeight: 1,
                                }}
                            >
                                50+
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 300,
                                    fontSize: "11px",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    color: "var(--cream-dim)",
                                    marginTop: "4px",
                                }}
                            >
                                Wild-harvested herbs
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Text col */}
                <div>
                    <RevealOnScroll delay={100}>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "10px",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "var(--green-l)",
                                marginBottom: "16px",
                            }}
                        >
                            Our Story
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <h2
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontWeight: 300,
                                fontSize: "clamp(36px, 4vw, 56px)",
                                lineHeight: 1.1,
                                letterSpacing: "-0.01em",
                                color: "var(--cream)",
                                marginBottom: "28px",
                            }}
                        >
                            Ancient wisdom,
                            <br />
                            <em
                                style={{
                                    fontStyle: "italic",
                                    color: "var(--green-l)",
                                }}
                            >
                                uncompromised
                            </em>
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300}>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "15px",
                                lineHeight: 1.8,
                                color: "var(--cream-dim)",
                                marginBottom: "20px",
                            }}
                        >
                            We started Rawherb because we couldn't find herbs
                            that were both genuinely wild-harvested and honestly
                            presented. No fillers, no standardized extracts, no
                            marketing vague about origin.
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "15px",
                                lineHeight: 1.8,
                                color: "var(--cream-dim)",
                                marginBottom: "40px",
                            }}
                        >
                            Every batch is sourced directly from farms and
                            forests in the Himalayan foothills, the Western
                            Ghats, and Rajasthan's arid plains — where the soil,
                            climate, and altitude create potency that certified
                            organics alone can't guarantee.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300}>
                        <button
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 500,
                                fontSize: "11px",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                background: "transparent",
                                color: "var(--cream)",
                                border: "1px solid rgba(74,124,89,0.5)",
                                padding: "14px 32px",
                                marginBottom: "48px",
                                transition: "transform 0.3s, border-color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-2px)";
                                e.currentTarget.style.borderColor =
                                    "var(--green-l)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.borderColor =
                                    "rgba(74,124,89,0.5)";
                            }}
                        >
                            Read Our Story
                        </button>
                    </RevealOnScroll>

                    {/* Stats from data */}
                    <RevealOnScroll delay={400}>
                        <div style={{ display: "flex", gap: "40px" }}>
                            {storyStats.map((stat) => (
                                <div
                                    key={stat.value}
                                    style={{
                                        borderLeft: "2px solid var(--green)",
                                        paddingLeft: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontWeight: 300,
                                            fontSize: "32px",
                                            color: "var(--cream)",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-inter)",
                                            fontWeight: 300,
                                            fontSize: "11px",
                                            color: "var(--cream-dim)",
                                            letterSpacing: "0.1em",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
