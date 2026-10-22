"use client";

export default function Newsletter() {
  return (
    <form className="news" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="nl-email" className="visually-hidden">
        Email address
      </label>
      <input id="nl-email" type="email" placeholder="you@business.com" autoComplete="email" />
      <button className="btn sm white" type="submit">
        Subscribe
      </button>
    </form>
  );
}
