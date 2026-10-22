const FAQS = [
  {
    n: "001",
    q: "Will it sound like a robot?",
    a: "No. You set the tone and approve example answers. Most customers can’t tell, and Ondesk always tells people it’s an assistant if asked.",
  },
  {
    n: "002",
    q: "What if it doesn’t know the answer?",
    a: "It never guesses prices or medical advice. It tells the customer a team member will reply and flags the chat for you.",
  },
  {
    n: "003",
    q: "Which calendars and booking tools does it work with?",
    a: "Google Calendar, Calendly, Fresha, Mindbody and Square Appointments. More are added every month.",
  },
  {
    n: "004",
    q: "How long does setup take?",
    a: "Most businesses are live in one afternoon. Our team can set it up for you on Growth and Pro.",
  },
  {
    n: "005",
    q: "Is my customer data safe?",
    a: "Data is encrypted in transit and at rest, stored in the US or EU, and never used to train public models.",
  },
  {
    n: "006",
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no setup fees. Export your conversations whenever you like.",
  },
];

export default function Faq() {
  return (
    <section className="faq sec gridlines" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="sticky">
          <span className="label">
            <b>012</b> / FAQ
          </span>
          <h2 className="slash" id="faq-h" style={{ marginTop: 10 }}>
            faq
          </h2>
          <p className="lede">
            Straight answers to the questions owners ask before they switch on an assistant.
          </p>
        </div>
        <div className="acc">
          {FAQS.map((f) => (
            <details key={f.n}>
              <summary>
                <span className="n">{f.n}</span>
                <span>{f.q}</span>
                <span className="pm" aria-hidden="true"></span>
              </summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
