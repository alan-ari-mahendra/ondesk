const TESTIMONIALS = [
  {
    quote:
      "We used to lose half our Saturday enquiries. Now Ondesk books them before I’ve finished my coffee.",
    avBg: "var(--orange)",
    initials: "HL",
    name: "Dr. Hana Lin",
    role: "Owner, Aurelle Skin Clinic",
  },
  {
    quote: "Trial signups more than doubled in the first month. It answers DMs better than I did.",
    avBg: "var(--green-bright)",
    initials: "RS",
    name: "Ria Santos",
    role: "Head Coach, FORMA Athletic",
  },
  {
    quote:
      "Every buyer enquiry gets a reply in seconds, even at midnight. Our agents only talk to qualified people now.",
    avBg: "var(--sky)",
    initials: "TA",
    name: "Tom Avery",
    role: "Director, Marlow Realty",
  },
];

export default function Testimonials() {
  return (
    <section className="sec dark gridlines" id="testimonials" aria-labelledby="testi-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>009</b> / What owners say
            </span>
            <h2 id="testi-h" style={{ fontSize: "clamp(32px,4vw,54px)" }}>
              Fewer missed Saturdays.
            </h2>
          </div>
        </div>
        <div className="testi">
          {TESTIMONIALS.map((t) => (
            <article className="t" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <div className="av" style={{ background: t.avBg }}>
                  {t.initials}
                </div>
                <div>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
