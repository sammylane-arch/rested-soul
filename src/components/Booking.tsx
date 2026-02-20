import './Booking.css'

export default function Booking() {
  return (
    <section id="booking" className="booking section" aria-labelledby="booking-heading">
      <div className="container">
        {/* Section header */}
        <div className="booking__header">
          <span className="section-label">Book an appointment</span>
          <h2 className="section-heading" id="booking-heading">
            Online booking coming soon
          </h2>
          <p className="section-subheading">
            We're setting up our online booking system to make scheduling as
            easy as possible. In the meantime, please get in touch directly —
            we'd love to hear from you.
          </p>
        </div>

        {/* Acuity embed placeholder */}
        <div className="booking__embed-wrapper" role="region" aria-label="Online booking system (coming soon)">
          <div className="booking__embed-placeholder">
            <div className="booking__embed-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="3" stroke="#7057C6" strokeWidth="1.8" fill="none"/>
                <path d="M3 9h18" stroke="#7057C6" strokeWidth="1.8"/>
                <path d="M8 2v4M16 2v4" stroke="#7057C6" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2" stroke="#7057C6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="booking__embed-label">Acuity Scheduling embed will go here</p>
            <p className="booking__embed-note">
              Replace this block with your Acuity embed code once your account is configured.
            </p>
          </div>
        </div>

        {/* Opening times & contact CTA */}
        <div className="booking__contact-row">
          {/* Opening times */}
          <div id="opening-times" className="booking__info-card" aria-label="Opening times">
            <div className="booking__info-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#7057C6" strokeWidth="1.8"/>
                <path d="M12 6v6l4 2" stroke="#7057C6" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="booking__info-title">Opening Times</h3>
            <ul className="booking__hours" role="list">
              <li><span>Monday – Friday</span><span>[00:00 – 00:00]</span></li>
              <li><span>Saturday</span><span>[00:00 – 00:00]</span></li>
              <li><span>Sunday</span><span>By arrangement</span></li>
            </ul>
            <p className="booking__hours-note">
              Evening and early morning appointments may be available — please enquire.
            </p>
          </div>

          {/* Phone CTA */}
          <div id="contact" className="booking__contact-card booking__contact-card--phone" aria-label="Call us">
            <div className="booking__contact-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.07a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 3.48 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#7057C6" strokeWidth="1.8" fill="none"/>
              </svg>
            </div>
            <p className="booking__contact-label">Call or text</p>
            <a
              href="tel:[PHONE]"
              className="booking__contact-value"
              aria-label="Call Rested Soul on [phone number]"
            >
              [07XXX XXX XXX]
            </a>
            <p className="booking__contact-note">
              We'll aim to respond within a few hours during opening times.
            </p>
          </div>

          {/* Email CTA */}
          <div className="booking__contact-card booking__contact-card--email" aria-label="Email us">
            <div className="booking__contact-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#7057C6" strokeWidth="1.8" fill="none"/>
                <polyline points="22,6 12,13 2,6" stroke="#7057C6" strokeWidth="1.8"/>
              </svg>
            </div>
            <p className="booking__contact-label">Email us</p>
            <a
              href="mailto:[EMAIL]"
              className="booking__contact-value"
              aria-label="Email Rested Soul"
            >
              [hello@restedsoul.co.uk]
            </a>
            <p className="booking__contact-note">
              Prefer email? Send us a message and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
