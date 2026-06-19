'use client'
import { useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = () => {
    if (!email) return
    console.log('Subscribe:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
      <section
          id="contact"
          className="section-pad"
          style={{ position: "relative", overflow: "hidden" }}
      >
          {/* Radial glow */}
          <div
              style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 600,
                  height: 300,
                  background:
                      "radial-gradient(ellipse at bottom, rgba(74,124,89,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
              }}
          />

          <div
              style={{
                  maxWidth: 640,
                  margin: "0 auto",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
              }}
          >
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
                      Stay connected
                  </p>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                  <h2
                      style={{
                          fontFamily: "var(--font-cormorant)",
                          fontWeight: 300,
                          fontSize: "clamp(32px, 4vw, 52px)",
                          color: "var(--cream)",
                          marginBottom: "16px",
                          lineHeight: 1.1,
                      }}
                  >
                      Join the herb{" "}
                      <em
                          style={{
                              fontStyle: "italic",
                              color: "var(--green-l)",
                          }}
                      >
                          community
                      </em>
                  </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                  <p
                      style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "var(--cream-dim)",
                          marginBottom: "40px",
                      }}
                  >
                      Seasonal herb guides, sourcing stories, and early access
                      to new batches. No spam — just plants.
                  </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                  {submitted ? (
                      <p
                          style={{
                              fontFamily: "var(--font-cormorant)",
                              fontWeight: 300,
                              fontSize: "24px",
                              color: "var(--green-l)",
                              fontStyle: "italic",
                          }}
                      >
                          You&apos;re in. Welcome to the community.
                      </p>
                  ) : (
                      <div
                          style={{
                              display: "flex",
                              gap: "0",
                              maxWidth: 480,
                              margin: "0 auto",
                          }}
                      >
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onKeyDown={(e) =>
                                  e.key === "Enter" && handleSubscribe()
                              }
                              placeholder="your@email.com"
                              style={{
                                  flex: 1,
                                  padding: "14px 20px",
                                  background: "rgba(74,124,89,0.08)",
                                  border: "1px solid rgba(74,124,89,0.3)",
                                  borderRight: "none",
                                  color: "var(--cream)",
                                  fontFamily: "var(--font-inter)",
                                  fontWeight: 300,
                                  fontSize: "14px",
                                  outline: "none",
                              }}
                          />
                          <button
                              onClick={handleSubscribe}
                              style={{
                                  padding: "14px 28px",
                                  background: "var(--green)",
                                  color: "var(--cream)",
                                  border: "none",
                                  fontFamily: "var(--font-inter)",
                                  fontWeight: 500,
                                  fontSize: "11px",
                                  letterSpacing: "0.2em",
                                  textTransform: "uppercase",
                                  transition: "background 0.3s, transform 0.3s",
                                  whiteSpace: "nowrap",
                              }}
                              onMouseEnter={(e) => {
                                  e.currentTarget.style.background =
                                      "var(--green-l)";
                                  e.currentTarget.style.transform =
                                      "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                  e.currentTarget.style.background =
                                      "var(--green)";
                                  e.currentTarget.style.transform =
                                      "translateY(0)";
                              }}
                          >
                              Subscribe
                          </button>
                      </div>
                  )}
              </RevealOnScroll>
          </div>
      </section>
  );
}
