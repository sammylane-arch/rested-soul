import { useState } from 'react'
import './PhotoCarousel.css'

const photos = [
  { src: '/steph_1.jpg', alt: 'Steph, Qualified Holistic Therapist at Rested Soul' },
  // Add more photos here: { src: '/photo2.jpg', alt: '...' },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent((i) => (i + 1) % photos.length)

  return (
    <section className="carousel section" aria-label="Photo gallery">
      <div className="container carousel__inner">
        <span className="section-label">Gallery</span>
        <h2 className="section-heading carousel__heading">A glimpse inside</h2>

        <div className="carousel__stage" role="region" aria-label="Photo carousel" aria-live="polite">
          <div className="carousel__track">
            <img
              key={photos[current].src}
              src={photos[current].src}
              alt={photos[current].alt}
              className="carousel__img"
            />
          </div>

          {photos.length > 1 && (
            <>
              <button
                className="carousel__btn carousel__btn--prev"
                onClick={prev}
                aria-label="Previous photo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="carousel__btn carousel__btn--next"
                onClick={next}
                aria-label="Next photo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="carousel__dots" role="tablist" aria-label="Gallery photos">
                {photos.map((p, i) => (
                  <button
                    key={p.src}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Photo ${i + 1}`}
                    className={`carousel__dot${i === current ? ' is-active' : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
