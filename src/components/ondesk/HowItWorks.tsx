const ARROW = (
  <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export default function HowItWorks() {
  return (
    <section className="how sec gridlines" id="product" aria-labelledby="how-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>004</b> / How it works
            </span>
            <h2 className="slash" id="how-h">
              product
            </h2>
          </div>
          <p className="lede">
            Live in one afternoon. Three steps, no developer, no new phone system.
          </p>
        </div>
        <div className="tbl" role="table" aria-label="How Ondesk works">
          <div className="row head" role="row">
            <div role="columnheader">
              <b>01</b> Step
            </div>
            <div role="columnheader">
              <b>02</b> What you do
            </div>
            <div role="columnheader">
              <b>03</b> Leads to
            </div>
          </div>
          <div className="row" role="row">
            <div className="cell" role="cell">
              <h3>
                <span className="num">001</span> Connect your channels
              </h3>
            </div>
            <div className="cell" role="cell">
              <p>
                Website chat, WhatsApp Business, Instagram and your calendar (Google Calendar,
                Calendly, Fresha, Mindbody). <span className="hl b">About 10 minutes</span>.
              </p>
            </div>
            <div className="cell" role="cell">
              <div className="lead">
                <div>
                  <b>Every inbox in one place</b>Channels
                </div>
                {ARROW}
              </div>
            </div>
          </div>
          <div className="row" role="row">
            <div className="cell" role="cell">
              <h3>
                <span className="num">002</span> Teach it your business
              </h3>
            </div>
            <div className="cell" role="cell">
              <p>
                Paste your website or upload your price list. Ondesk learns{" "}
                <span className="hl o">services, prices, hours and policies</span>. You approve
                every answer style.
              </p>
            </div>
            <div className="cell" role="cell">
              <div className="lead">
                <div>
                  <b>Answers that sound like you</b>Knowledge
                </div>
                {ARROW}
              </div>
            </div>
          </div>
          <div className="row" role="row">
            <div className="cell" role="cell">
              <h3>
                <span className="num">003</span> Go live and watch
              </h3>
            </div>
            <div className="cell" role="cell">
              <p>
                It replies, books and follows up. You get a{" "}
                <span className="hl g">daily summary</span> and can jump into any conversation.
              </p>
            </div>
            <div className="cell" role="cell">
              <div className="lead">
                <div>
                  <b>Bookings while you work</b>Autopilot
                </div>
                {ARROW}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
