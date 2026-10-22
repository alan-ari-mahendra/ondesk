"use client";

import { useState } from "react";

const LINKS = [
  { href: "#product", num: "01", label: "Product" },
  { href: "#use-cases", num: "02", label: "Use cases" },
  { href: "#pricing", num: "03", label: "Pricing" },
  { href: "#faq", num: "04", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Ondesk home">
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <rect x="1" y="1" width="26" height="26" rx="7" fill="#171614" />
            <path
              d="M8 10.5h12M8 14.5h8M8 18.5h5"
              stroke="#F3EFE7"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="21" cy="18.5" r="2.4" fill="#2F8BFF" />
          </svg>
          Ondesk
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              <b>{l.num}</b> {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <span className="status">
            <i aria-hidden="true" /> All systems answering
          </span>
          <a className="nav-login" href="#login">
            Log in
          </a>
          <a className="btn sm" href="#demo">
            Start free trial
          </a>
        </div>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`} id="mobile-menu">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <b>{l.num}</b> {l.label}
          </a>
        ))}
        <div className="mm-actions">
          <a className="btn ghost" href="#login" onClick={() => setOpen(false)}>
            Log in
          </a>
          <a className="btn" href="#demo" onClick={() => setOpen(false)}>
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
