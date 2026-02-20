import './About.css'

const credentials = [
  { label: 'Qualified since', value: 'June 2024' },
  { label: 'Qualification', value: '[e.g. BTEC Level 5 / ITEC Diploma]' },
  { label: 'Member of', value: '[e.g. Federation of Holistic Therapists]' },
  { label: 'Insurance', value: 'Fully insured' },
]

const passions = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 14.2c-2.5 0-4.7-1.3-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1c-1.3 1.9-3.5 3.2-6 3.2z" fill="currentColor"/>
      </svg>
    ),
    label: 'Meditation',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" fill="currentColor"/>
      </svg>
    ),
    label: 'Movement',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 22H5.2c.5-1.32 1.14-2.62 2-3.8C9.67 20 14 19 17 17c0 0-3-2-3-6 0 0 4 1 6-2 0 0-3-1-3-5 3 0 5 2 5 2s0-5-5-7c0 0-1 3-5 4C9 5 7 7 7 7s2 1 3 3c0 0-3 0-5-2 0 2 1 6 5 8 0 0-1 1-1 2 3.5-.5 6.5-2 9-6" fill="currentColor"/>
      </svg>
    ),
    label: 'Nature',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.5 6.5c0 1.1-.7 2-1.5 2S5.5 7.6 5.5 6.5 6.2 4 7 4s1.5 1.4 1.5 2.5zm7 0C15.5 7.6 16.8 8.5 17 8c.2-.5.5-1 .5-1.5C17.5 5.4 16.8 4 16 4s-1.5 1.4-1.5 2.5zM4.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 10c-3.3 0-6 2.7-6 6 0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2 0-3.3-2.7-6-6-6z" fill="currentColor"/>
      </svg>
    ),
    label: 'Animals',
  },
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
          <p className="about__title">Qualified Holistic Therapist</p>

          <p className="about__intro">
            Hi, I'm Steph — a professionally qualified massage therapist with
            a lifelong love for healing and the power of therapeutic touch.
            From a young age I felt a natural pull towards this work, but like
            many people, self-doubt held me back for a while. That all changed
            in June 2024, when I finally followed my heart and qualified in
            massage.
          </p>

          <p>
            I trained at <em>[training institution]</em> and hold a{' '}
            <em>[qualification level]</em>. Since then I've been building my
            experience, growing my client base, and expanding my qualifications
            — and I'm only just getting started.
          </p>

          <p>
            My approach is intuitive and always tailored to you. Whether you're
            looking to release physical tension, calm your mind, or simply
            carve out some time for yourself, I'll create a safe, soothing
            space where you can fully relax, recharge, and feel cared for.
          </p>

          <p>
            Outside the treatment room you'll find me meditating, working out,
            spending time in nature, or on mum duties to my furbaby Hunter —
            practices that keep me grounded and shape the care I bring to every
            session.
          </p>

          <ul className="about__passions" role="list" aria-label="Steph's interests and values">
            {passions.map(({ icon, label }) => (
              <li key={label} className="about__passion-tag">
                {icon}
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <a href="#booking" className="btn btn-outline about__cta">
            Book a session
          </a>
        </div>

        {/* Credentials panel */}
        <aside className="about__credentials" aria-label="Therapist credentials">
          <div className="about__credentials-card">
            <div className="about__avatar">
              <img
                src="/steph_1.jpg"
                alt="Steph, Qualified Holistic Therapist at Rested Soul"
                className="about__avatar-photo"
              />
              <p className="about__avatar-name">Steph</p>
              <p className="about__avatar-label">Qualified Holistic Therapist</p>
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
