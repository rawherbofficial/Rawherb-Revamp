"use client";
import { useEffect } from "react";
import { useLenis } from "@/lib/hooks/useLenis";

export default function LenisProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const lenisRef = useLenis();

    useEffect(() => {
        // Expose globally so any anchor link / component can trigger scrollTo
        (window as any).lenis = lenisRef.current;
        return () => {
            (window as any).lenis = null;
        };
    }, [lenisRef]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest(
                'a[href^="#"]',
            ) as HTMLAnchorElement | null;
            if (!target) return;

            const id = target.getAttribute("href");
            if (!id || id === "#") return;

            const el = document.querySelector(id);
            if (!el) return;

            e.preventDefault();
            const lenis = (window as any).lenis;
            if (lenis) {
                lenis.scrollTo(el, { offset: -80, duration: 1.2 });
            } else {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return <>{children}</>;
}
