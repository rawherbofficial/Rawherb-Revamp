// components/layout/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "dark";
        setTheme(saved);
        document.documentElement.dataset.theme = saved;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
    );
}
