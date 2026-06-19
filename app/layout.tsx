import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import CustomCursor from "@/components/layout/CustomCursor";
import LenisProvider from "@/components/layout/LenisProvider";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Rawherb — Pure. Ancient. Alive.",
    description:
        "Wild-harvested Ayurvedic herbs. Zero additives. Direct from Indian farms.",
    openGraph: {
        title: "Rawherb",
        description: "Pure, wild-harvested herbs from India.",
        url: "https://rawherb.co.in",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${cormorant.variable} ${inter.variable}`}
            data-theme="dark"
        >
            <body>
                <ThemeProvider />
                <LenisProvider>
                    <CustomCursor />
                    {children}
                </LenisProvider>
            </body>
        </html>
    );
}
