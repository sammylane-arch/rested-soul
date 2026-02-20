import './FAQ.css'

interface FaqItem {
  id: string
  question: string
  answer: React.ReactNode
}

const faqs: FaqItem[] = [
  {
    id: 'massage-types',
    question: 'What type of massage do you offer?',
    answer: (
      <>
        <p>The short answer: tailored massages.</p>
        <p>
          I don't advertise individual services the way many therapists do,
          such as hot stones, Swedish, or deep tissue. Instead, I offer
          customised sessions designed around your needs on the day
          (consultation dependent).
        </p>
        <p>
          Whether you need deeper pressure, gentle relaxation, focused work on
          tight areas, or a blend of techniques, your massage is created
          specifically for you.
        </p>
        <p>
          Our bodies are unique, and on any given day we might need something
          slightly different. That's exactly how I work.
        </p>
      </>
    ),
  },
  {
    id: 'first-appointment',
    question: 'What should I expect at my first appointment?',
    answer: (
      <>
        <p>
          Please arrive at the time of your appointment and I'll collect you
          from the entrance area. We'll then head down to the massage room,
          fill out a short consultation form, and discuss your expectations and
          any areas of tension.
        </p>
        <p>Then you simply relax while I take care of the rest.</p>
      </>
    ),
  },
  {
    id: 'how-often',
    question: 'How often should I get a massage?',
    answer: (
      <>
        <p>It's entirely a personal choice.</p>
        <ul>
          <li>For general wellness, once every 2–4 weeks can be ideal.</li>
          <li>
            For stress, tension buildup, or if you're highly active, weekly
            sessions may help.
          </li>
        </ul>
        <p>Your body will always tell you what it needs.</p>
      </>
    ),
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear?',
    answer: (
      <p>
        [Placeholder: e.g. You'll be covered with a sheet or towel throughout
        the session and only the area being worked on will be uncovered.
        Comfortable, loose clothing to change into afterwards is recommended.]
      </p>
    ),
  },
  {
    id: 'before-after',
    question: 'Is there anything I should do before or after a session?',
    answer: (
      <p>
        [Placeholder: e.g. Try to avoid a large meal in the hour before your
        appointment. Afterwards, drink plenty of water and take it easy if you
        can. Your body may continue to release tension for a little while.]
      </p>
    ),
  },
  {
    id: 'medical-conditions',
    question: 'Can I have a massage if I have a medical condition?',
    answer: (
      <p>
        [Placeholder: e.g. In many cases, yes, but please let me know in
        advance. There are some conditions where massage may need to be adapted
        or avoided. I'll always review your health intake form before we begin
        and discuss anything relevant with you.]
      </p>
    ),
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq__header">
          <span className="section-label">Common questions</span>
          <h2 className="section-heading" id="faq-heading">
            FAQ
          </h2>
          <p className="section-subheading">
            Can't find what you're looking for? Feel free to get in touch
            directly. We're always happy to help.
          </p>
        </div>

        <dl className="faq__list">
          {faqs.map(({ id, question, answer }) => (
            <details key={id} className="faq__item" name="faq-group">
              <summary className="faq__question">
                <span>{question}</span>
                <span className="faq__chevron" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                {answer}
              </div>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}
