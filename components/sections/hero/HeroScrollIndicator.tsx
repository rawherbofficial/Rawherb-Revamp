export default function HeroScrollIndicator() {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                zIndex: 4,
            }}
        >
            <p
                style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--cream-dim)",
                }}
            >
                Scroll
            </p>
            <div
                style={{
                    width: 1,
                    height: 48,
                    background: "var(--green)",
                    animation: "scrollLine 2s ease-in-out infinite",
                }}
            />
        </div>
    );
}
