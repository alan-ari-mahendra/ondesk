export default function Problem() {
  return (
    <section className="problem sec dark gridlines" id="problem" aria-labelledby="problem-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>003</b> / The problem
            </span>
            <h2 id="problem-h">
              The leads arrive <span className="mark">after</span> the desk goes quiet.
            </h2>
          </div>
        </div>
        <div className="stats">
          <div className="stat b">
            <span className="label">Unanswered calls</span>
            <div className="n">62%</div>
            <p>
              of calls to small businesses go <b>unanswered</b>.
            </p>
          </div>
          <div className="stat o">
            <span className="label">Time to cold</span>
            <div className="n">5 min</div>
            <p>
              is how fast a lead goes cold. After that, <b>most book with someone else</b>.
            </p>
          </div>
          <div className="stat g">
            <span className="label">After hours</span>
            <div className="n">1 in 4</div>
            <p>
              bookings come in after hours, <b>when nobody is at the desk</b>.
            </p>
          </div>
        </div>
        <p className="after">Ondesk answers all of them, in seconds, at 2 AM or 2 PM.</p>
      </div>
    </section>
  );
}
