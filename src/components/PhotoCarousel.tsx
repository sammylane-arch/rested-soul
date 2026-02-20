import { useState, useEffect, useRef } from 'react'
import './PhotoCarousel.css'

const photos = [
  { src: '/carousel/steph_2.jpg', alt: 'Steph, Qualified Holistic Therapist at Rested Soul' },
  { src: '/carousel/steph_3.jpg', alt: 'Steph and Hunter' },
  { src: '/carousel/steph_5.jpg', alt: 'Crystal Healing' },
  { src: '/carousel/steph_6.jpg', alt: 'Crystal Healing Session' },
  { src: '/carousel/steph_7.jpg', alt: 'Indian Head Massage' },
  // Drop any image into public/carousel/ and add it here: { src: '/carousel/photo2.jpg', alt: '...' },
]

const INTERVAL_MS = 4000

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length)
    }, INTERVAL_MS)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const prev = () => { setCurrent((i) => (i - 1 + photos.length) % photos.length); resetTimer() }
  const next = () => { setCurrent((i) => (i + 1) % photos.length); resetTimer() }
  const goTo = (i: number) => { setCurrent(i); resetTimer() }

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
                    onClick={() => goTo(i)}
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
