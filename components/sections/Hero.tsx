"use client";
import { useMouseParallax } from "@/lib/hooks/useMouseParallax";
import HeroBackground from "./hero/HeroBackground";
import HeroLeaves from "./hero/HeroLeaves";
import HeroModel3D from "./hero/HeroModel3D";
import HeroText from "./hero/HeroText";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";

export default function Hero() {
    const { x, y } = useMouseParallax();

    return (
        <section
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 80px",
            }}
        >
            <HeroBackground letterOffsetX={x * 0.3} letterOffsetY={y * 0.3} />
            <HeroLeaves />
            <HeroModel3D
                mouseX={x / 20}
                mouseY={y / 12}
                offsetX={x}
                offsetY={y}
            />
            <HeroText />
            <HeroScrollIndicator />
        </section>
    );
}
