import './About.css'

const credentials = [
  { label: 'Qualified since', value: '[Year]' },
  { label: 'Qualification', value: '[e.g. BTEC Level 5 / ITEC Diploma]' },
  { label: 'Member of', value: '[e.g. Federation of Holistic Therapists]' },
  { label: 'Insurance', value: 'Fully insured' },
]

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container about__inner">
        {/* Text column */}
        <div className="about__content">
          <span className="section-label">Meet your therapist</span>
          <h2 className="section-heading" id="about-heading">
            About Steph
          </h2>

          <p className="about__intro">
            Hi, I'm Steph — a qualified massage therapist with{' '}
            <strong>[X] years of experience</strong> helping people feel more
            comfortable in their bodies.
          </p>

          <p>
            I trained at <em>[training institution]</em> and hold a{' '}
            <em>[qualification level]</em> in massage therapy. I've since worked
            with clients ranging from busy professionals carrying desk-related
            tension to active individuals managing sports-related muscle fatigue.
          </p>

          <p>
            My approach is always led by you. Every session begins with a brief
            consultation so I can understand what you need — whether that's
            deep relaxation, targeted relief from persistent tension, or
            something in between. There's no one-size-fits-all here.
          </p>

          <p>
            I believe that regular massage can play a meaningful role in
            general wellbeing, and I'm committed to providing a safe, calm,
            and professional environment for every client.
          </p>

          <a href="#booking" className="btn btn-outline about__cta">
            Read more
          </a>
        </div>

        {/* Credentials panel */}
        <aside className="about__credentials" aria-label="Therapist credentials">
          <div className="about__credentials-card">
            {/* Avatar placeholder */}
            <div className="about__avatar" aria-label="Photo of Steph">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="24" cy="19" r="9" fill="#7057C6" opacity="0.35"/>
                <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#7057C6" opacity="0.2"/>
              </svg>
              <p className="about__avatar-label">Photo coming soon</p>
            </div>

            <div className="about__credentials-divider" aria-hidden="true" />

            <ul className="about__cred-list" role="list" aria-label="Credentials">
              {credentials.map(({ label, value }) => (
                <li key={label} className="about__cred-item">
                  <span className="about__cred-label">{label}</span>
                  <span className="about__cred-value">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
