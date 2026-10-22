"use client";

import { useState } from "react";

const CHECK = (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M3 8.5l3 3 7-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PLANS = [
  {
    key: "starter",
    num: "01",
    name: "Starter",
    popular: false,
    priceMonthly: 49,
    priceYearly: 41,
    billedMonthly: "Billed monthly",
    billedYearly: "Billed $492 yearly",
    forText: "One location, two channels, the basics done well.",
    features: [
      "1 location",
      "Website chat + WhatsApp",
      "500 conversations per month",
      "Calendar booking",
      "Email support",
    ],
    cta: "Start free trial",
    ctaClass: "btn ghost",
  },
  {
    key: "growth",
    num: "02",
    name: "Growth",
    popular: true,
    priceMonthly: 129,
    priceYearly: 107,
    billedMonthly: "Billed monthly",
    billedYearly: "Billed $1,284 yearly",
    forText: "Every channel, lead qualification and follow-ups for growing teams.",
    features: [
      "Up to 3 locations",
      "All channels incl. Instagram and Messenger",
      "2,000 conversations per month",
      "Lead qualification",
      "No-show follow-ups",
      "Human handoff",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaClass: "btn",
  },
  {
    key: "pro",
    num: "03",
    name: "Pro",
    popular: false,
    priceMonthly: 299,
    priceYearly: 249,
    billedMonthly: "Billed monthly",
    billedYearly: "Billed $2,988 yearly",
    forText: "Unlimited locations, custom rules and a team that sets it up for you.",
    features: [
      "Unlimited locations",
      "6,000 conversations per month",
      "Custom AI voice and rules",
      "HubSpot and Zapier",
      "Dedicated onboarding",
      "SLA",
    ],
    cta: "Talk to sales",
    ctaClass: "btn ghost",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="pricing sec gridlines" id="pricing" aria-labelledby="pricing-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>011</b> / Pricing
            </span>
            <h2 className="slash" id="pricing-h">
              pricing
            </h2>
          </div>
          <div className="toggle" role="group" aria-label="Billing period">
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>
              Yearly <span className="save">Save 17%</span>
            </button>
          </div>
        </div>
        <div className="plans">
          {PLANS.map((p) => (
            <div className={`plan${p.popular ? " pop" : ""}`} key={p.key}>
              <span className="label">
                <span>
                  <b>{p.num}</b> / {p.name}
                </span>
                {p.popular && <span className="tag">Most popular</span>}
              </span>
              <h3>{p.name}</h3>
              <div className="price">
                <span className="cur">$</span>
                <span className="amt">{yearly ? p.priceYearly : p.priceMonthly}</span>
                <span className="per">/ month</span>
              </div>
              <div className="billed">{yearly ? p.billedYearly : p.billedMonthly}</div>
              <p className="for">{p.forText}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>
              <a className={p.ctaClass} href="#demo">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="under">All plans include a 14 day free trial. No credit card. Cancel any time.</p>
      </div>
    </section>
  );
}
