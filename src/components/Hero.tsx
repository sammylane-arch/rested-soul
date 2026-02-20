import './Hero.css'

const trustPoints = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#4DB08C"/>
      </svg>
    ),
    text: 'Fully qualified & insured',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#4DB08C"/>
      </svg>
    ),
    text: 'Personalised to your needs',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#4DB08C" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#4DB08C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Flexible appointment times',
  },
]

export default function Hero() {
  return (
    <section className="hero section" aria-label="Welcome to Rested Soul">
      {/* Decorative background shapes */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label">Professional Massage Therapy</span>

          <h1 className="hero__headline">
            Find your moment<br />
            <em>of true rest</em>
          </h1>

          <p className="hero__subheading">
            Personalised massage treatments designed to ease tension, restore
            balance, and leave you feeling genuinely renewed. Every session is
            tailored to you.
          </p>

          <div className="hero__actions">
            <a href="#booking" className="btn btn-primary">
              Book a massage
            </a>
            <a href="#treatments" className="btn btn-outline">
              View treatments
            </a>
          </div>

          <ul className="hero__trust" role="list" aria-label="Why choose Rested Soul">
            {trustPoints.map(({ icon, text }) => (
              <li key={text} className="hero__trust-item">
                {icon}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative illustration panel */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-card">
            <div className="hero__visual-leaf hero__visual-leaf--1">
              <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 170 C60 170 10 120 10 70 C10 20 60 5 60 5 C60 5 110 20 110 70 C110 120 60 170 60 170Z" fill="#4DB08C" opacity="0.18"/>
                <path d="M60 170 C60 170 15 125 20 75 C25 30 60 10 60 10" stroke="#4DB08C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none"/>
              </svg>
            </div>
            <div className="hero__visual-leaf hero__visual-leaf--2">
              <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 115 C40 115 5 80 5 45 C5 12 40 3 40 3 C40 3 75 12 75 45 C75 80 40 115 40 115Z" fill="#4DB08C" opacity="0.12"/>
              </svg>
            </div>
            <div className="hero__visual-text">
              <p className="hero__visual-quote">"A little rest is all the body needs to remember how well it can feel."</p>
            </div>
            <div className="hero__visual-dots" aria-hidden="true">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="hero__dot" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
