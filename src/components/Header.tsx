import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Opening Times', href: '#opening-times' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
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
          <img
            src="/logo.png"
            alt="Rested Soul"
            className="site-header__logo-img"
            width="66"
            height="66"
          />
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
