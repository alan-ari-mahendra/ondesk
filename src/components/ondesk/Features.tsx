const FEATURES = [
  {
    cls: "c1",
    num: "001",
    title: "Instant replies, 24/7",
    body: "Answers in under 5 seconds, any hour, in 40+ languages.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 4v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    cls: "c2",
    num: "002",
    title: "Books into your calendar",
    body: "Checks real availability and confirms in the chat. No double bookings.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <rect x="3" y="4" width="14" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M7 13l2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    cls: "c3",
    num: "003",
    title: "Lead qualification",
    body: "Asks your questions (budget, timeline, service) and tags hot leads.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M3 4h14l-5 6v5l-4 2v-7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    cls: "c4",
    num: "004",
    title: "No-show follow-ups",
    body: "Reminds 24 hours and 2 hours before. Rebooks cancellations automatically.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M5 8a5 5 0 0 1 10 0c0 4 2 5 2 5H3s2-1 2-5zM8 16a2 2 0 0 0 4 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    cls: "c5",
    num: "005",
    title: "Human handoff",
    body: "Flags tricky conversations and passes them to your team with full context.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="7" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M2 17c0-3 2-5 5-5s5 2 5 5M13 4a3 3 0 0 1 0 6M14 12c2.5.5 4 2.5 4 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    cls: "c6",
    num: "006",
    title: "Your voice, your rules",
    body: "Set tone, topics to avoid and when to offer discounts. It never makes up prices.",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M4 15l8-8 2 2-8 8H4zM12 7l2-2 2 2-2 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M3 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features sec gridlines" id="features" aria-labelledby="features-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>006</b> / Features
            </span>
            <h2 id="features-h">
              Everything a great front desk does. Without the <span className="mark blue">hold music</span>.
            </h2>
          </div>
        </div>
        <div className="fgrid">
          {FEATURES.map((f) => (
            <div className={`f ${f.cls}`} key={f.num}>
              <div className="top">
                <span className="label">
                  <b>{f.num}</b>
                </span>
                <span className="ic">{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
