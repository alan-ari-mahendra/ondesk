"use client";

import { useRef, useState } from "react";

const TABS = [
  {
    key: "clinics",
    num: "01",
    label: "Clinics",
    color: "orange",
    heading: "Fill every chair.",
    bullets: [
      "Answers treatment and price questions",
      "Books consults and sends pre-care instructions",
      "Handles reschedules without a phone call",
    ],
    result: { value: "+31%", label: "consult bookings" },
    snippetLabel: (
      <>
        <b>Instagram</b> / Aurelle Skin Clinic
      </>
    ),
    customerMsg: "Is Botox painful?",
    replyMsg:
      "Most clients describe it as a quick pinch. Dr. Lin uses a numbing cream first. Want to book a free 15 min consult?",
  },
  {
    key: "gyms",
    num: "02",
    label: "Gyms",
    color: "brown",
    heading: "Turn DMs into trial classes.",
    bullets: ["Shares schedule and pricing", "Books trial classes", "Chases no-shows"],
    result: { value: "2.4x", label: "more trial signups" },
    snippetLabel: (
      <>
        <b>WhatsApp</b> / FORMA Athletic
      </>
    ),
    customerMsg: "What time is HIIT tomorrow?",
    replyMsg: "6:30 AM and 6:15 PM with Coach Ria. 3 spots left at 6:15. Want me to save one for you?",
  },
  {
    key: "salons",
    num: "03",
    label: "Salons",
    color: "green",
    heading: "Keep the chair busy.",
    bullets: [
      "Books by stylist and service length",
      "Sells add-ons",
      "Fills last-minute gaps from a waitlist",
    ],
    result: { value: "18 hrs", label: "saved per week" },
    snippetLabel: (
      <>
        <b>Website chat</b> / Glow Lab Studio
      </>
    ),
    customerMsg: "Can I get a cut and color Friday?",
    replyMsg: "Jess has 1:00 PM free for a 2.5 hour cut and color ($180). Shall I book it?",
  },
  {
    key: "re",
    num: "04",
    label: "Real estate",
    color: "blue",
    heading: "Answer every enquiry first.",
    bullets: ["Qualifies buyers (budget, timeline, pre-approval)", "Books inspections", "Sends floor plans"],
    result: { value: "3x", label: "faster first reply" },
    snippetLabel: (
      <>
        <b>Messenger</b> / Marlow Realty
      </>
    ),
    customerMsg: "Is the 2 bed still available?",
    replyMsg:
      "Yes! From $1.15M with a harbour view. Are you buying to live in or invest? I can book a private inspection this week.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(TABS[0].key);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    if (e.key === "ArrowLeft") n = (i - 1 + TABS.length) % TABS.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = TABS.length - 1;
    if (n >= 0) {
      e.preventDefault();
      setActive(TABS[n].key);
      tabRefs.current[n]?.focus();
    }
  };

  return (
    <section className="usecases sec gridlines" id="use-cases" aria-labelledby="uc-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>008</b> / Use cases
            </span>
            <h2 className="slash" id="uc-h">
              use cases
            </h2>
          </div>
          <p className="lede">Same front desk, trained on your business. Pick yours.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Use cases">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className="tab"
              role="tab"
              id={`tab-${t.key}`}
              aria-selected={active === t.key}
              aria-controls={`panel-${t.key}`}
              tabIndex={active === t.key ? 0 : -1}
              onClick={() => setActive(t.key)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <b>{t.num}</b> {t.label}
            </button>
          ))}
        </div>

        {TABS.map((t) => (
          <div
            key={t.key}
            className={`panel ${t.color}${active === t.key ? " on" : ""}`}
            role="tabpanel"
            id={`panel-${t.key}`}
            aria-labelledby={`tab-${t.key}`}
            tabIndex={0}
            hidden={active !== t.key}
          >
            <div>
              <span className="label">
                <b>{t.num}</b> / {t.label}
              </span>
              <h3>{t.heading}</h3>
              <ul>
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="res">
                <b>{t.result.value}</b>
                <small>{t.result.label}</small>
              </div>
            </div>
            <div className="snip">
              <span className="label">{t.snippetLabel}</span>
              <div className="msg c">{t.customerMsg}</div>
              <div className="msg o">{t.replyMsg}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
