import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <a className="logo" href="#top" aria-label="Ondesk home">
              <svg viewBox="0 0 28 28" aria-hidden="true">
                <rect x="1" y="1" width="26" height="26" rx="7" fill="#F3EFE7" />
                <path
                  d="M8 10.5h12M8 14.5h8M8 18.5h5"
                  stroke="#171614"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx="21" cy="18.5" r="2.4" fill="#2F8BFF" />
              </svg>
              Ondesk
            </a>
            <p className="tag">The AI front desk for local businesses.</p>
          </div>
          <div>
            <h3>
              <b>01</b> Product
            </h3>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
              <li>
                <a href="#top">What&rsquo;s new</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <b>02</b> Use cases
            </h3>
            <ul>
              <li>
                <a href="#use-cases">Clinics</a>
              </li>
              <li>
                <a href="#use-cases">Gyms</a>
              </li>
              <li>
                <a href="#use-cases">Salons</a>
              </li>
              <li>
                <a href="#use-cases">Real estate</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <b>03</b> Company
            </h3>
            <ul>
              <li>
                <a href="#top">About</a>
              </li>
              <li>
                <a href="#top">Careers</a>
              </li>
              <li>
                <a href="#demo">Contact</a>
              </li>
              <li>
                <a href="#top">Privacy</a>
              </li>
              <li>
                <a href="#top">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <b>04</b> Newsletter
            </h3>
            <Newsletter />
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Ondesk Inc. All rights reserved.</span>
          <div className="social">
            <a href="#top" aria-label="Ondesk on X">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#top" aria-label="Ondesk on LinkedIn">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <rect x="3" y="7" width="3" height="8" fill="currentColor" />
                <circle cx="4.5" cy="4" r="1.6" fill="currentColor" />
                <path
                  d="M8 7h3v1.5c.6-1 1.6-1.7 3-1.7 2 0 3 1.3 3 3.7V15h-3v-4c0-1-.4-1.7-1.3-1.7S11 10 11 11v4H8z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#top" aria-label="Ondesk on Instagram">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <rect x="2.5" y="2.5" width="13" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="13" cy="5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
