import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Opening Times', href: '#opening-times' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click / Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`} role="banner">
      <div className="container site-header__inner">
        {/* Logo */}
        <a href="#" className="site-header__logo" aria-label="Rested Soul — home">
          <svg
            viewBox="0 0 700 170"
            className="site-header__logo-img"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Leaf */}
            <g fill="none" stroke="#4DB08C" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="M80 8 C122 28,128 72,116 108 C104 138,82 160,80 162 C78 160,56 138,44 108 C32 72,38 28,80 8 Z"
                fill="#4DB08C" fillOpacity="0.10" strokeWidth="2.5"
              />
              <path d="M80 14 C79 62,79 108,80 155" strokeWidth="2"/>
              <path d="M80 62 C66 54,53 44,46 36" strokeWidth="1.5"/>
              <path d="M80 62 C94 54,107 44,114 36" strokeWidth="1.5"/>
              <path d="M80 95 C66 87,54 79,47 71" strokeWidth="1.5"/>
              <path d="M80 95 C94 87,106 79,113 71" strokeWidth="1.5"/>
            </g>
            {/* Text */}
            <text
              x="168" y="112"
              fontSize="54"
              fontFamily="'Nunito', 'Poppins', Arial, sans-serif"
              fontWeight="700"
              fill="#7057C6"
              letterSpacing="4"
            >
              RESTED SOUL
            </text>
          </svg>
        </a>

        {/* Desktop nav */}
        <nav className="site-header__nav" aria-label="Main navigation">
          <ul role="list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="site-header__nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a href="#booking" className="btn btn-primary site-header__cta">
          Book a massage
        </a>

        {/* Mobile hamburger */}
        <button
          className={`site-header__hamburger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`site-header__mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="site-header__mobile-link"
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                className="btn btn-primary site-header__mobile-cta"
                onClick={handleNavClick}
              >
                Book a massage
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
