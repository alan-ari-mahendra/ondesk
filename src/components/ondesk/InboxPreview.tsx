const CONVERSATIONS = [
  {
    avBg: "var(--pink)",
    initials: "MK",
    dot: "var(--green-bright)",
    name: "Maya K.",
    time: "2m",
    msg: "2pm please",
    pill: { cls: "booked", label: "Booked" },
    active: true,
  },
  {
    avBg: "var(--blue)",
    initials: "JT",
    dot: "var(--pink)",
    name: "Jordan T.",
    time: "9m",
    msg: "Do you do laser hair removal?",
    pill: { cls: "new", label: "New lead" },
  },
  {
    avBg: "var(--orange-deep)",
    initials: "PR",
    dot: "var(--blue)",
    name: "Priya R.",
    time: "14m",
    msg: "I had a reaction after my last peel...",
    pill: { cls: "needs", label: "Needs you" },
  },
  {
    avBg: "var(--green)",
    initials: "SA",
    dot: "var(--green-bright)",
    name: "Sam A.",
    time: "31m",
    msg: "Can I move Thursday to Friday?",
    pill: { cls: "booked", label: "Booked" },
  },
  {
    avBg: "var(--brown)",
    initials: "LW",
    dot: "var(--blue-deep)",
    name: "Lena W.",
    time: "1h",
    msg: "Thanks, see you Saturday!",
    pill: { cls: "res", label: "Resolved" },
  },
  {
    avBg: "var(--ink)",
    initials: "DO",
    dot: "var(--orange)",
    name: "Dev O.",
    time: "2h",
    msg: "What's the price for a consult?",
    pill: { cls: "new", label: "New lead" },
  },
];

export default function InboxPreview() {
  return (
    <section className="preview sec gridlines" id="inbox" aria-labelledby="inbox-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>007</b> / The inbox
            </span>
            <h2 id="inbox-h">One inbox for every conversation.</h2>
          </div>
        </div>
        <div
          className="dash"
          role="img"
          aria-label="Ondesk dashboard: KPIs, conversation list, open thread and customer card"
        >
          <div className="dash-bar">
            <i></i>
            <i></i>
            <i></i>
            <span className="url">app.ondesk.example/inbox</span>
          </div>
          <div className="kpis">
            <div className="kpi">
              <span className="label">Conversations today</span>
              <div className="v">128</div>
              <div className="d">+18% vs yesterday</div>
            </div>
            <div className="kpi">
              <span className="label">Booked</span>
              <div className="v g">41</div>
              <div className="d">32% conversion</div>
            </div>
            <div className="kpi">
              <span className="label">Avg reply</span>
              <div className="v b">4s</div>
              <div className="d">Fastest: 2s</div>
            </div>
            <div className="kpi">
              <span className="label">Revenue booked</span>
              <div className="v o">$6,240</div>
              <div className="d">+$1,120 vs yesterday</div>
            </div>
          </div>
          <div className="dash-body">
            <div className="convs">
              <div className="hd">
                <span className="label">
                  <b>Inbox</b> / 6 open
                </span>
                <span className="label">All channels</span>
              </div>
              {CONVERSATIONS.map((c) => (
                <div className={`conv${c.active ? " active" : ""}`} key={c.name}>
                  <div className="av" style={{ background: c.avBg }}>
                    {c.initials}
                    <i style={{ background: c.dot }}></i>
                  </div>
                  <div>
                    <div className="nm">
                      {c.name} <small>{c.time}</small>
                    </div>
                    <div className="lm">{c.msg}</div>
                  </div>
                  <span className={`pill ${c.pill.cls}`}>{c.pill.label}</span>
                </div>
              ))}
            </div>
            <div className="thread">
              <div className="hd">
                Maya K. <span className="pill booked">Booked</span>
                <span className="label">WhatsApp</span>
              </div>
              <div className="msgs">
                <div className="msg c">
                  Hi, do you have anything for a facial this Saturday?
                  <time>2:14 PM</time>
                </div>
                <div className="msg o">
                  Hi Maya! We have 10:30 AM or 2:00 PM on Saturday for the Signature Facial (60
                  min, $95). Which works?
                  <time>2:14 PM, replied in 4s</time>
                </div>
                <div className="msg c">
                  2pm please
                  <time>2:15 PM</time>
                </div>
                <div className="msg o">
                  Booked. Saturday 2:00 PM with Dr. Lin. I&rsquo;ve sent a confirmation to your
                  WhatsApp. See you then!
                  <time>2:15 PM</time>
                </div>
                <span className="note">Calendar updated, reminder scheduled for Fri 2:00 PM</span>
              </div>
              <div className="reply">
                <span>Jump in and reply as Dr. Lin</span>
                <span className="btn sm" aria-hidden="true">
                  Take over
                </span>
              </div>
            </div>
            <aside className="cust">
              <div className="who">
                <div className="av">MK</div>
                <div>
                  <b>Maya Kessler</b>
                  <small>+1 415 555 0142</small>
                </div>
              </div>
              <dl>
                <div>
                  <dt>Visits</dt>
                  <dd>3</dd>
                </div>
                <div>
                  <dt>Spent</dt>
                  <dd>$285</dd>
                </div>
                <div>
                  <dt>Source</dt>
                  <dd>Instagram ad</dd>
                </div>
                <div>
                  <dt>Last seen</dt>
                  <dd>2 min ago</dd>
                </div>
              </dl>
              <div className="book">
                <span className="label">Upcoming</span>
                <b>Signature Facial</b>
                <small>Sat 2:00 PM, Dr. Lin, $95</small>
              </div>
              <div className="tags">
                <span>returning</span>
                <span>facial</span>
                <span>saturday</span>
                <span>hot lead</span>
              </div>
            </aside>
          </div>
        </div>
        <p className="caption">Every chat, booking and follow-up in one place. Jump in any time.</p>
      </div>
    </section>
  );
}
