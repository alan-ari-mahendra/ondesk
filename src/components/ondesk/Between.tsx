"use client";

import { useEffect, useRef } from "react";

export default function Between() {
  const wireRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const els = wireRefs.current.filter(Boolean) as SVGPathElement[];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("on"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="between sec gridlines" aria-labelledby="between-h">
        <div className="wrap two">
          <div>
            <span className="label">
              <b>005</b> / Where it sits
            </span>
            <h2 id="between-h" style={{ marginTop: 18 }}>
              We sit between your customer and every tool you use.
            </h2>
            <p>
              A customer writes on whatever app they have open. Ondesk reads it, checks your
              calendar, answers from your own prices and policies, and writes the booking into
              the tools your team already looks at.
            </p>
          </div>
          <div
            className="diagram"
            aria-label="Diagram: customer connects through Ondesk to WhatsApp, Instagram, your calendar and your CRM"
            role="img"
          >
            <svg viewBox="0 0 640 400">
              <path
                ref={(el) => {
                  wireRefs.current[0] = el;
                }}
                className="wire draw"
                pathLength="1"
                d="M120 200 H270"
                stroke="#171614"
              />
              <path
                ref={(el) => {
                  wireRefs.current[1] = el;
                }}
                className="wire draw"
                pathLength="1"
                d="M370 200 H420 Q440 200 440 180 V90 Q440 70 460 70 H520"
                stroke="#25B06A"
              />
              <path
                ref={(el) => {
                  wireRefs.current[2] = el;
                }}
                className="wire draw"
                pathLength="1"
                d="M370 200 H420 Q440 200 440 180 V170 Q440 155 460 155 H520"
                stroke="#E2457B"
              />
              <path
                ref={(el) => {
                  wireRefs.current[3] = el;
                }}
                className="wire draw"
                pathLength="1"
                d="M370 200 H420 Q440 200 440 220 V230 Q440 245 460 245 H520"
                stroke="#2F8BFF"
              />
              <path
                ref={(el) => {
                  wireRefs.current[4] = el;
                }}
                className="wire draw"
                pathLength="1"
                d="M370 200 H420 Q440 200 440 220 V310 Q440 330 460 330 H520"
                stroke="#E26D1F"
              />
              <circle cx="90" cy="200" r="30" fill="#fff" stroke="#171614" strokeWidth="3" />
              <path
                d="M78 212c0-7 5-11 12-11s12 4 12 11M90 198a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                fill="none"
                stroke="#171614"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text x="90" y="252" textAnchor="middle" className="nl k">
                Your customer
              </text>
              <rect x="270" y="168" width="100" height="64" rx="12" fill="#171614" />
              <path
                d="M292 190h40M292 200h28M292 210h18"
                stroke="#F3EFE7"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="342" cy="210" r="6" fill="#2F8BFF" />
              <text x="320" y="258" textAnchor="middle" className="nl k">
                Ondesk
              </text>
              <circle cx="550" cy="70" r="28" fill="#fff" stroke="#25B06A" strokeWidth="3" />
              <path
                d="M540 60a14 14 0 1 1 3 23l-7 2 2-6a14 14 0 0 1 2-19z"
                fill="none"
                stroke="#171614"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <text x="550" y="114" textAnchor="middle" className="nl">
                WhatsApp
              </text>
              <circle cx="550" cy="155" r="28" fill="#fff" stroke="#E2457B" strokeWidth="3" />
              <rect
                x="539"
                y="144"
                width="22"
                height="22"
                rx="6"
                fill="none"
                stroke="#171614"
                strokeWidth="2.2"
              />
              <circle cx="550" cy="155" r="5" fill="none" stroke="#171614" strokeWidth="2.2" />
              <circle cx="556.5" cy="148.5" r="1.4" fill="#171614" />
              <text x="550" y="199" textAnchor="middle" className="nl">
                Instagram
              </text>
              <circle cx="550" cy="245" r="28" fill="#fff" stroke="#2F8BFF" strokeWidth="3" />
              <rect
                x="539"
                y="236"
                width="22"
                height="20"
                rx="3"
                fill="none"
                stroke="#171614"
                strokeWidth="2.2"
              />
              <path
                d="M539 242h22M545 232v6M555 232v6"
                stroke="#171614"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <text x="550" y="289" textAnchor="middle" className="nl">
                Calendar
              </text>
              <circle cx="550" cy="330" r="28" fill="#fff" stroke="#E26D1F" strokeWidth="3" />
              <path
                d="M540 322h20v16h-20zM545 322v-4h10v4"
                fill="none"
                stroke="#171614"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <text x="550" y="374" textAnchor="middle" className="nl">
                CRM
              </text>
            </svg>
          </div>
        </div>
        <div className="wrap">
          <div className="cards3">
            <div className="card">
              <span className="num">01</span>
              <h3>Replies before they tab away</h3>
              <p>Under 5 seconds, every channel, every hour. The customer never knows it is 11 PM.</p>
            </div>
            <div className="card">
              <span className="num">02</span>
              <h3>Books from real availability</h3>
              <p>Reads your live calendar, so a slot it offers is a slot you have.</p>
            </div>
            <div className="card">
              <span className="num">03</span>
              <h3>Hands over when it should</h3>
              <p>Anything it should not answer goes to your team with the whole thread attached.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
