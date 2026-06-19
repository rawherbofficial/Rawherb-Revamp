"use client";
import Link from "next/link";
import {
    HERO_EYEBROW,
    HERO_SUBTEXT,
    HERO_CTA_PRIMARY,
    HERO_CTA_SECONDARY,
} from "@/constants/hero";
import { useBreakpoint } from "@/lib/hooks/useBreakPoint";

const linkBase: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 500,
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "14px 32px",
    textDecoration: "none",
    display: "inline-block",
    transition: "transform 0.3s, background 0.3s, border-color 0.3s",
};

export default function HeroText() {
    const bp = useBreakpoint();

    return (
        <div
            style={{
                position: "relative",
                zIndex: 4,
                paddingTop: bp === "mobile" ? "0px" : "10px",
                maxWidth: "520px",
            }}
        >
            <p
                style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "10px",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "var(--green-xl)",
                    marginBottom: "24px",
                }}
            >
                {HERO_EYEBROW}
            </p>

            <h1
                style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 300,
                    fontSize: "clamp(64px, 8vw, 120px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                    color: "var(--cream)",
                }}
            >
                Nature&apos;s
                <br />
                <em style={{ color: "var(--green-l)", fontStyle: "italic" }}>
                    Purest
                </em>
                <br />
                Form
            </h1>

            <p
                style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--cream-dim)",
                    maxWidth: "420px",
                    margin: "24px auto 40px",
                }}
            >
                {HERO_SUBTEXT}
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: bp === "mobile" ? "column" : "row",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link
                    href="#products"
                    style={{
                        ...linkBase,
                        background: "var(--green)",
                        color: "var(--cream)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "var(--green-l)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "var(--green)";
                    }}
                >
                    {HERO_CTA_PRIMARY}
                </Link>
                <Link
                    href="#story"
                    style={{
                        ...linkBase,
                        fontWeight: 300,
                        background: "transparent",
                        color: "var(--cream-dim)",
                        border: "1px solid rgba(74,124,89,0.4)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.borderColor = "var(--green-l)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor =
                            "rgba(74,124,89,0.6)";
                    }}
                >
                    {HERO_CTA_SECONDARY}
                </Link>
            </div>
        </div>
    );
}
