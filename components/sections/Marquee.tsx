const herbs = [
    "Ashwagandha",
    "Brahmi",
    "Triphala",
    "Shatavari",
    "Neem",
    "Tulsi",
    "Amla",
    "Turmeric",
    "Moringa",
];
const items = [...herbs, ...herbs];

export default function Marquee() {
    return (
        <div
            style={{
                background: "var(--green)",
                overflow: "hidden",
                padding: "20px 0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    animation: "marquee 20s linear infinite",
                    width: "max-content",
                }}
            >
                {items.map((herb, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontWeight: 300,
                            fontSize: "22px",
                            color: "var(--cream)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "32px",
                            padding: "0 32px",
                        }}
                    >
                        {herb}
                        <span
                            style={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: "rgba(232,223,200,0.4)",
                                display: "inline-block",
                            }}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
}
