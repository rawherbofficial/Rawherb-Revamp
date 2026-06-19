import { processSteps } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { PROCESS_ICONS } from "./process/ProcessIcons";
import ProcessStep from "./process/ProcessStep";

export default function Process() {
    return (
        <section id="process" className="section-pad">
            <div style={{ maxWidth: 1300, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <RevealOnScroll>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "10px",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "var(--green-l)",
                                marginBottom: "16px",
                            }}
                        >
                            How It Works
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
                            From forest to your door
                        </h2>
                    </RevealOnScroll>
                </div>

                <div
                    className="grid-cols-3 relative"
                >
                    {/* Connector line */}
                    <div
                        style={{
                            position: "absolute",
                            top: 60,
                            left: "16.6%",
                            right: "16.6%",
                            height: 1,
                            background:
                                "linear-gradient(to right, transparent, var(--green), transparent)",
                            zIndex: 0,
                        }}
                    />

                    {processSteps.map((step, i) => (
                        <ProcessStep
                            key={step.number}
                            step={step}
                            index={i}
                            Icon={PROCESS_ICONS[i]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
