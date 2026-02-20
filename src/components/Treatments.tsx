import './Treatments.css'

interface Treatment {
  id: string
  icon: React.ReactNode
  name: string
  tagline: string
  description: string
  duration: string
}

const treatments: Treatment[] = [
  {
    id: 'swedish',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 4C10 4 6 8 6 14c0 4 2 7 5 9l2 4h6l2-4c3-2 5-5 5-9 0-6-4-10-10-10z" fill="#4DB08C" opacity="0.2"/>
        <path d="M16 4C10 4 6 8 6 14c0 4 2 7 5 9" stroke="#4DB08C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M11 15c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" stroke="#4DB08C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    name: 'Swedish Relaxation Massage',
    tagline: 'Unwind and restore',
    description:
      'Long, flowing strokes combined with gentle kneading to ease muscle tension and calm the nervous system. Ideal for anyone carrying everyday stress or looking for a peaceful, restorative experience.',
    duration: '60 or 90 min',
  },
  {
    id: 'deep-tissue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="20" height="4" rx="2" fill="#4DB08C" opacity="0.2"/>
        <rect x="6" y="16" width="20" height="4" rx="2" fill="#4DB08C" opacity="0.12"/>
        <path d="M8 12h16M8 18h16" stroke="#4DB08C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8l-2 16M20 8l2 16" stroke="#4DB08C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    name: 'Deep Tissue Massage',
    tagline: 'Target persistent tension',
    description:
      'Focused, sustained pressure applied to deeper layers of muscle and connective tissue. Suitable for those with chronic muscle tightness, postural issues, or areas of long-held tension.',
    duration: '60 or 90 min',
  },
  {
    id: 'sports',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="#4DB08C" strokeWidth="1.8" fill="none" opacity="0.3"/>
        <path d="M10 16c2-3 4-4 6-4s4 1 6 4" stroke="#4DB08C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M16 12v8M12 14l4 2 4-2" stroke="#4DB08C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    name: 'Sports Massage',
    tagline: 'Support active recovery',
    description:
      'Tailored to the demands of physical activity, this treatment helps reduce muscle soreness, improve flexibility, and support recovery. Suitable for both regular exercisers and competitive athletes.',
    duration: '45, 60 or 90 min',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="treatments section" aria-labelledby="treatments-heading">
      <div className="container">
        <div className="treatments__header">
          <span className="section-label">What we offer</span>
          <h2 className="section-heading" id="treatments-heading">
            Treatments
          </h2>
          <p className="section-subheading">
            Each session is tailored to your individual needs. No two massages
            are the same. Please discuss any preferences or health considerations
            at the time of booking.
          </p>
        </div>

        <ul className="treatments__grid" role="list">
          {treatments.map(({ id, icon, name, tagline, description, duration }) => (
            <li key={id} className="treatment-card">
              <div className="treatment-card__icon-wrap" aria-hidden="true">
                {icon}
              </div>
              <div className="treatment-card__body">
                <span className="treatment-card__tagline">{tagline}</span>
                <h3 className="treatment-card__name">{name}</h3>
                <p className="treatment-card__desc">{description}</p>
                <div className="treatment-card__meta">
                  <span className="treatment-card__duration">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M12 6v6l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    {duration}
                  </span>
                </div>
              </div>
              <a
                href="#booking"
                className="treatment-card__link"
                aria-label={`Learn more about ${name}`}
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <p className="treatments__pricing-note" role="note">
          Full price list available on request.
        </p>
      </div>
    </section>
  )
}
