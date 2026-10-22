"use client";

import { useEffect, useState } from "react";

const STEP_DELAYS = [600, 900, 1500, 1800, 800, 1400, 1100, 3500, 500];

export default function Hero() {
  const [msgShow, setMsgShow] = useState([false, false, false, false]);
  const [typingShow, setTypingShow] = useState(false);
  const [typingAfter, setTypingAfter] = useState<1 | 2>(1);
  const [bookedShow, setBookedShow] = useState(false);
  const [statShow, setStatShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const t = setTimeout(() => {
        setMsgShow([true, true, true, true]);
        setBookedShow(true);
        setStatShow(true);
      }, 0);
      return () => clearTimeout(t);
    }

    const reset = () => {
      setMsgShow([false, false, false, false]);
      setTypingShow(false);
      setBookedShow(false);
      setStatShow(false);
    };

    const steps: Array<() => void> = [
      () => setMsgShow((m) => [true, m[1], m[2], m[3]]),
      () => {
        setTypingAfter(1);
        setTypingShow(true);
      },
      () => {
        setTypingShow(false);
        setMsgShow((m) => [m[0], true, m[2], m[3]]);
        setStatShow(true);
      },
      () => setMsgShow((m) => [m[0], m[1], true, m[3]]),
      () => {
        setTypingAfter(2);
        setTypingShow(true);
      },
      () => {
        setTypingShow(false);
        setMsgShow((m) => [m[0], m[1], m[2], true]);
      },
      () => setBookedShow(true),
      () => reset(),
      () => {},
    ];

    let i = 0;
    let running = true;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const run = () => {
      if (!running) return;
      timer = setTimeout(() => {
        steps[i]();
        i = (i + 1) % steps.length;
        run();
      }, STEP_DELAYS[i]);
    };
    run();

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        if (timer) clearTimeout(timer);
      } else if (!running) {
        running = true;
        run();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="hero sec gridlines" id="hero" aria-labelledby="h1">
      <div className="wrap">
        <div>
          <span className="label">
            <b>001</b> / Hero
          </span>
          <p className="eyebrow">AI front desk for clinics, gyms, salons and agents</p>
          <h1 id="h1">
            Never miss another <span className="mark">booking</span>.
          </h1>
          <p className="sub">
            Ondesk answers every chat, WhatsApp and DM in seconds, books straight into your
            calendar and follows up while you work. Like a front desk that never logs off.
          </p>
          <div className="cta-row">
            <a className="btn" href="#demo">
              Start free trial{" "}
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn ghost" href="#product">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 5.5v5l4-2.5z" fill="currentColor" />
              </svg>{" "}
              Watch 2 min demo
            </a>
          </div>
          <p className="micro">
            <span>14 days free</span>
            <span>No credit card</span>
            <span>Set up in one afternoon</span>
          </p>
        </div>

        <div className="demo">
          <div className={`stat-float${statShow ? " show" : ""}`}>Replied in 4 seconds</div>
          <div
            className="phone"
            aria-label="Live chat demo: Ondesk books a facial for a customer"
            role="img"
          >
            <div className="phone-top">
              <div className="av" aria-hidden="true">
                AS
              </div>
              <div className="who">
                Aurelle Skin Clinic
                <small>Ondesk is answering</small>
              </div>
              <span className="ch">WhatsApp</span>
            </div>
            <div className="chat">
              <div className={`msg c${msgShow[0] ? " show" : ""}`} style={{ order: 0 }}>
                Hi, do you have anything for a facial this Saturday?
              </div>
              <div className={`msg o${msgShow[1] ? " show" : ""}`} style={{ order: 1 }}>
                Hi Maya! We have 10:30 AM or 2:00 PM on Saturday for the Signature Facial (60 min,
                $95). Which works?
              </div>
              <div className={`msg c${msgShow[2] ? " show" : ""}`} style={{ order: 2 }}>
                2pm please
              </div>
              <div className={`msg o${msgShow[3] ? " show" : ""}`} style={{ order: 3 }}>
                Booked. Saturday 2:00 PM with Dr. Lin. I’ve sent a confirmation to your WhatsApp.
                See you then!
              </div>
              <div
                className={`typing${typingShow ? " show" : ""}`}
                style={{ order: typingAfter === 1 ? 0.5 : 2.5 }}
                aria-hidden="true"
              >
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className={`booked${bookedShow ? " show" : ""}`} style={{ order: 4 }}>
                <div className="ic">
                  <svg viewBox="0 0 18 18" aria-hidden="true">
                    <path
                      d="M4 9.5l3 3 7-7"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <b>Booking confirmed</b>
                  <small>Sat 2:00 PM, Signature Facial</small>
                </div>
                <span className="price">$95</span>
              </div>
            </div>
          </div>
          <div className="chips" aria-label="Channels Ondesk answers">
            <span>
              <i style={{ background: "var(--blue)" }}></i>Website chat
            </span>
            <span>
              <i style={{ background: "var(--green-bright)" }}></i>WhatsApp
            </span>
            <span>
              <i style={{ background: "var(--pink)" }}></i>Instagram
            </span>
            <span>
              <i style={{ background: "var(--blue-deep)" }}></i>Messenger
            </span>
            <span>
              <i style={{ background: "var(--orange)" }}></i>SMS
            </span>
          </div>
        </div>
      </div>
      <div className="conn-hero" aria-hidden="true">
        <div className="conn-l"></div>
      </div>
    </section>
  );
}
