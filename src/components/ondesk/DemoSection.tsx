"use client";

import { useState, type FormEvent } from "react";

type FieldKey = "name" | "email" | "type" | "volume";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function DemoSection() {
  const [errors, setErrors] = useState<Record<FieldKey, boolean>>({
    name: false,
    email: false,
    type: false,
    volume: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const validate = (key: FieldKey, value: string) => {
    const good = key === "email" ? EMAIL_RE.test(value.trim()) : value.trim().length > 0;
    setErrors((e) => ({ ...e, [key]: !good }));
    return good;
  };

  const handleBlur = (key: FieldKey) => (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    validate(key, e.target.value);
  };

  const handleInput = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (errors[key]) validate(key, e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: FieldKey[] = ["name", "email", "type", "volume"];
    let allGood = true;
    let firstBad: FieldKey | null = null;
    fields.forEach((key) => {
      const good = validate(key, String(data.get(key) ?? ""));
      if (!good) {
        allGood = false;
        if (!firstBad) firstBad = key;
      }
    });
    if (!allGood) {
      if (firstBad) form.querySelector<HTMLElement>(`#f-${firstBad}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="final sec gridlines" id="demo" aria-labelledby="demo-h">
      <div className="wrap">
        <div>
          <span className="label">
            <b>013</b> / Book a demo
          </span>
          <h2 id="demo-h">Give your front desk a night off.</h2>
          <p className="sub">Book a 20 minute demo or start free today.</p>
          <div className="deco-ring" aria-hidden="true"></div>
        </div>
        <div className="form">
          {!submitted ? (
            <form id="demoForm" noValidate onSubmit={handleSubmit}>
              <span className="label">
                <b>Form</b> / 20 minute demo
              </span>
              <div className="row2">
                <div className={`field${errors.name ? " err" : ""}`}>
                  <label htmlFor="f-name">Name</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-describedby="e-name"
                    onBlur={handleBlur("name")}
                    onChange={handleInput("name")}
                  />
                  <span className="msg-err" id="e-name">
                    Enter your name.
                  </span>
                </div>
                <div className={`field${errors.email ? " err" : ""}`}>
                  <label htmlFor="f-email">Work email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-describedby="e-email"
                    onBlur={handleBlur("email")}
                    onChange={handleInput("email")}
                  />
                  <span className="msg-err" id="e-email">
                    Enter a valid email address.
                  </span>
                </div>
              </div>
              <div className="row2">
                <div className={`field${errors.type ? " err" : ""}`}>
                  <label htmlFor="f-type">Business type</label>
                  <select
                    id="f-type"
                    name="type"
                    required
                    aria-describedby="e-type"
                    defaultValue=""
                    onBlur={handleBlur("type")}
                    onChange={handleInput("type")}
                  >
                    <option value="">Choose one</option>
                    <option>Clinic</option>
                    <option>Gym or studio</option>
                    <option>Salon or spa</option>
                    <option>Real estate</option>
                    <option>Other</option>
                  </select>
                  <span className="msg-err" id="e-type">
                    Choose your business type.
                  </span>
                </div>
                <div className={`field${errors.volume ? " err" : ""}`}>
                  <label htmlFor="f-vol">Monthly enquiries</label>
                  <select
                    id="f-vol"
                    name="volume"
                    required
                    aria-describedby="e-vol"
                    defaultValue=""
                    onBlur={handleBlur("volume")}
                    onChange={handleInput("volume")}
                  >
                    <option value="">Choose one</option>
                    <option>Under 100</option>
                    <option>100 to 500</option>
                    <option>500 to 2,000</option>
                    <option>2,000+</option>
                  </select>
                  <span className="msg-err" id="e-vol">
                    Choose a range.
                  </span>
                </div>
              </div>
              <button className="btn blue" type="submit">
                Book my demo
              </button>
              <p className="alt">
                Or <a href="#pricing">start your free trial</a>
              </p>
            </form>
          ) : null}
          <div className={`success${submitted ? " on" : ""}`} role="status" aria-live="polite">
            <div className="ic">
              <svg viewBox="0 0 30 30" aria-hidden="true">
                <path
                  d="M7 15.5l5 5 11-11"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>You&rsquo;re booked in.</h3>
            <p>Check your inbox for a calendar invite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
