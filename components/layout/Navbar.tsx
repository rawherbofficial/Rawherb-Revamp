"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useBreakpoint } from "@/lib/hooks/useBreakPoint";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const bp = useBreakpoint();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: scrolled ? "16px 24px" : "24px 24px",
                    transition: "padding 0.4s cubic-bezier(0.16,1,0.3,1)",
                    background: "rgba(var(--bg-rgb), 0.92)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "0.1px solid var(--green)"
                }}
            >
                <Link
                    href="/"
                    className="cursor-pointer"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();

                            router.replace("/", { scroll: false });

                            const lenis = (window as any).lenis;

                            if (lenis) {
                                lenis.scrollTo(0, { duration: 1.2 });
                            } else {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }
                        }
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontWeight: 300,
                            fontSize: "20px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--cream)",
                        }}
                    >
                        Rawherb
                    </span>
                </Link>

                {/* Desktop links */}
                {bp !== "mobile" && (
                    <div style={{ display: "flex", gap: "40px" }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                scroll={false}
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 300,
                                    fontSize: "11px",
                                    letterSpacing: "0.25em",
                                    textTransform: "uppercase",
                                    color: "var(--cream-dim)",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color =
                                        "var(--cream)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color =
                                        "var(--cream-dim)")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}

                <ThemeToggle />

                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                    }}
                >
                    {bp !== "mobile" && (
                        <Link
                            href="#products"
                            scroll={false}
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 500,
                                fontSize: "11px",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                background: "var(--green)",
                                color: "var(--cream)",
                                padding: "10px 20px",
                                textDecoration: "none",
                                transition: "background 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background =
                                    "var(--green-l)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background =
                                    "var(--green)")
                            }
                        >
                            Shop Now
                        </Link>
                    )}

                    {/* Hamburger */}
                    {bp === "mobile" && (
                        <button
                            onClick={() => setMenuOpen((o) => !o)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "var(--cream)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                                padding: "4px",
                            }}
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    style={{
                                        display: "block",
                                        width: "22px",
                                        height: "1px",
                                        background: "var(--cream)",
                                        transform: menuOpen
                                            ? i === 0
                                                ? "rotate(45deg) translate(4px, 4px)"
                                                : i === 2
                                                  ? "rotate(-45deg) translate(4px, -4px)"
                                                  : "scaleX(0)"
                                            : "none",
                                        transition: "transform 0.3s",
                                    }}
                                />
                            ))}
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile menu drawer */}
            {bp === "mobile" && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(var(--bg-rgb), 0.97)",
                        backdropFilter: "blur(12px)",
                        zIndex: 99,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "32px",
                        opacity: menuOpen ? 1 : 0,
                        pointerEvents: menuOpen ? "all" : "none",
                        transition: "opacity 0.3s",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            scroll={false}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontWeight: 300,
                                fontSize: "36px",
                                letterSpacing: "0.1em",
                                color: "var(--cream)",
                                textDecoration: "none",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#products"
                        scroll={false}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            marginTop: "16px",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            background: "var(--green)",
                            color: "var(--cream)",
                            padding: "14px 32px",
                            textDecoration: "none",
                        }}
                    >
                        Shop Now
                    </Link>
                </div>
            )}
        </>
    );
}
