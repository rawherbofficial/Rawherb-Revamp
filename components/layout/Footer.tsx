"use client";
import Link from "next/link";
import { footerColumns } from "@/lib/data";

export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--bg)",
                borderTop: "1px solid rgba(74,124,89,0.15)",
                padding: "80px 48px 40px",
            }}
        >
            <div style={{ maxWidth: 1300, margin: "0 auto" }}>
                <div className="footer-grid mb-15">
                    {/* Brand col */}
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontWeight: 300,
                                fontSize: "28px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--cream)",
                                marginBottom: "16px",
                            }}
                        >
                            Rawherb
                        </div>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "13px",
                                lineHeight: 1.7,
                                color: "var(--cream-dim)",
                                maxWidth: "280px",
                            }}
                        >
                            Pure, wild-harvested herbs from India's most
                            biodiverse regions. No additives, ever.
                        </p>
                    </div>

                    {/* Data-driven link columns */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                    fontSize: "10px",
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                    color: "var(--green-l)",
                                    marginBottom: "20px",
                                }}
                            >
                                {col.title}
                            </p>
                            <ul
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            scroll={!link.href.startsWith("#")}
                                            style={{
                                                fontFamily: "var(--font-inter)",
                                                fontWeight: 300,
                                                fontSize: "13px",
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        borderTop: "1px solid rgba(74,124,89,0.12)",
                        paddingTop: "24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 300,
                            fontSize: "11px",
                            color: "var(--cream-dim)",
                            letterSpacing: "0.05em",
                        }}
                    >
                        © {new Date().getFullYear()} Rawherb. All rights
                        reserved.
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 300,
                            fontSize: "11px",
                            color: "var(--cream-dim)",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Made with care · India
                    </p>
                </div>
            </div>
        </footer>
    );
}
