const INTEGRATIONS = [
  { name: "Google Calendar", cat: "Calendar" },
  { name: "Calendly", cat: "Scheduling" },
  { name: "WhatsApp Business", cat: "Channel" },
  { name: "Instagram", cat: "Channel" },
  { name: "Messenger", cat: "Channel" },
  { name: "Fresha", cat: "Salon booking" },
  { name: "Mindbody", cat: "Studio booking" },
  { name: "Square", cat: "Payments" },
  { name: "Stripe", cat: "Payments" },
  { name: "HubSpot", cat: "CRM" },
  { name: "Zapier", cat: "Automation" },
  { name: "Gmail", cat: "Email" },
];

export default function Integrations() {
  return (
    <section className="integrations sec gridlines" id="integrations" aria-labelledby="int-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label">
              <b>010</b> / Integrations
            </span>
            <h2 id="int-h" style={{ fontSize: "clamp(32px,4vw,54px)" }}>
              Works with the tools you already use.
            </h2>
          </div>
          <p className="lede">Native connections, no middleware to babysit.</p>
        </div>
        <div className="igrid" aria-label="Integrations">
          {INTEGRATIONS.map((i) => (
            <div key={i.name}>
              {i.name}
              <small>{i.cat}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
