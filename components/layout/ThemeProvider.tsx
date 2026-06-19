// components/layout/ThemeProvider.tsx
"use client";

import { useEffect } from "react";

export default function ThemeProvider() {
    useEffect(() => {
        const saved = localStorage.getItem("theme") || "dark";
        document.documentElement.dataset.theme = saved;
    }, []);

    return null;
}
