"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
    PRODUCT_CARD_HOVER_BG,
    PRODUCT_CARD_DEFAULT_BG,
} from "@/constants/products";
import type { Product } from "@/types";

interface Props {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: Props) {
    const [hovered, setHovered] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <RevealOnScroll delay={(index * 100) as 0 | 100 | 200 | 300 | 400}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    background: hovered
                        ? PRODUCT_CARD_HOVER_BG
                        : PRODUCT_CARD_DEFAULT_BG,
                    border: hovered
                        ? "1px solid rgba(74,124,89,0.35)"
                        : "1px solid rgba(74,124,89,0.1)",
                    padding: "28px",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {product.badge && (
                    <span
                        style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            fontSize: "9px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            background:
                                product.badge === "Bestseller"
                                    ? "var(--amber)"
                                    : "var(--green)",
                            color: "var(--cream)",
                            padding: "4px 10px",
                        }}
                    >
                        {product.badge}
                    </span>
                )}

                <div
                    style={{
                        height: 180,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: 110,
                            height: 110,
                            borderRadius: "50%",
                            background: hovered
                                ? "radial-gradient(circle, rgba(74,124,89,0.25) 0%, rgba(74,124,89,0.05) 60%, transparent 80%)"
                                : "radial-gradient(circle, rgba(74,124,89,0.12) 0%, transparent 70%)",
                            transition: "background 0.4s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontWeight: 300,
                                fontSize: "48px",
                                color: "rgba(74,124,89,0.5)",
                                fontStyle: "italic",
                                userSelect: "none",
                                filter: hovered
                                    ? "brightness(1.4)"
                                    : "brightness(1)",
                                transition: "filter 0.4s",
                            }}
                        >
                            {product.name[0]}
                        </span>
                    </div>
                </div>

                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "var(--green-l)",
                        marginBottom: "8px",
                    }}
                >
                    {product.tag}
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "22px",
                        color: "var(--cream)",
                        marginBottom: "8px",
                        lineHeight: 1.2,
                    }}
                >
                    {product.name}
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "12px",
                        lineHeight: 1.6,
                        color: "var(--cream-dim)",
                        marginBottom: "24px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {product.description}
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontWeight: 400,
                            fontSize: "22px",
                            color: "var(--cream)",
                        }}
                    >
                        ₹{product.price}
                    </span>
                    <button
                        onClick={handleAdd}
                        style={{
                            width: 36,
                            height: 36,
                            background: added ? "var(--green)" : "transparent",
                            border: `1px solid ${added ? "var(--green)" : "rgba(74,124,89,0.4)"}`,
                            color: "var(--cream)",
                            fontSize: added ? "14px" : "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s",
                        }}
                    >
                        {added ? "✓" : "+"}
                    </button>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "var(--green)",
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                />
            </div>
        </RevealOnScroll>
    );
}
