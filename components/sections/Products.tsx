"use client";
import { products } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ProductCard from "./products/ProductCard";

export default function Products() {
    return (
        <section
            id="products"
            style={{ background: "var(--bg2)" }}
            className="section-pad"
        >
            <div style={{ maxWidth: 1300, margin: "0 auto" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: "48px",
                    }}
                >
                    <div>
                        <RevealOnScroll>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 300,
                                    fontSize: "10px",
                                    letterSpacing: "0.35em",
                                    textTransform: "uppercase",
                                    color: "var(--green-l)",
                                    marginBottom: "12px",
                                }}
                            >
                                Our Range
                            </p>
                        </RevealOnScroll>
                        <RevealOnScroll delay={100}>
                            <h2
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontWeight: 300,
                                    fontSize: "clamp(32px, 4vw, 52px)",
                                    letterSpacing: "-0.01em",
                                    color: "var(--cream)",
                                }}
                            >
                                Herbs, as nature intended
                            </h2>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll delay={200}>
                        <button
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "12px",
                                color: "var(--green-l)",
                                background: "transparent",
                                border: "none",
                                letterSpacing: "0.05em",
                                transition: "transform 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                    "translateY(-2px)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform =
                                    "translateY(0)")
                            }
                        >
                            View all products →
                        </button>
                    </RevealOnScroll>
                </div>

                <div className="grid-cols-4">
                    {products.map((p, i) => (
                        <ProductCard key={p.id} product={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
