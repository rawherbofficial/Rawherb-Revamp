"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;

        let mouseX = 0,
            mouseY = 0;
        let ringX = 0,
            ringY = 0;

        const dot = dotRef.current!;
        const ring = ringRef.current!;

        dot.style.display = "block";
        ring.style.display = "block";

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
        };

        const onEnter = () => (dot.style.width = dot.style.height = "20px");
        const onLeave = () => (dot.style.width = dot.style.height = "12px");

        const interactives = document.querySelectorAll(
            "a, button, [data-cursor]",
        );
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        let raf: number;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const loop = () => {
            ringX = lerp(ringX, mouseX, 0.12);
            ringY = lerp(ringY, mouseY, 0.12);
            ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
            raf = requestAnimationFrame(loop);
        };

        raf = requestAnimationFrame(loop);

        window.addEventListener("mousemove", onMove);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="hidden fixed top-0 left-0 pointer-events-none rounded-full z-9999 mix-blend-difference transition-[width,height] duration-200"
                style={{
                    width: 12,
                    height: 12,
                    background: "var(--green-l)",
                }}
            />

            <div
                ref={ringRef}
                className="hidden fixed top-0 left-0 pointer-events-none w-9 h-9 rounded-full z-9998 opacity-60"
                style={{
                    border: "1px solid var(--green-l)",
                }}
            />
        </>
    );
}
