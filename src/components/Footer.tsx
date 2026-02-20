import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="location" className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        {/* Brand */}
        <div className="site-footer__brand">
          <a href="#" className="site-footer__logo" aria-label="Rested Soul — back to top">
            <img
              src="/logo.png"
              alt="Rested Soul"
              className="site-footer__logo-img"
              width="88"
              height="88"
            />
          </a>
          <p className="site-footer__tagline">
            Personalised massage therapy to help you feel your best.
          </p>
        </div>

        {/* Location */}
        <div className="site-footer__location">
          <h3 className="site-footer__col-title">Location</h3>
          <address className="site-footer__address">
            <p>[Town / Area], [County]</p>
            <p>[Postcode area]</p>
            <p>Home visits and clinic appointments available — please enquire.</p>
          </address>
        </div>

        {/* Links */}
        <div className="site-footer__links">
          <h3 className="site-footer__col-title">Quick links</h3>
          <nav aria-label="Footer navigation">
            <ul role="list">
              <li><a href="#about">About</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#opening-times">Opening Times</a></li>
              <li><a href="#booking">Book</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p className="site-footer__copyright">
            &copy; {currentYear} Rested Soul. All rights reserved.
          </p>
          <div className="site-footer__legal">
            <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="/terms" aria-label="Terms and Conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
