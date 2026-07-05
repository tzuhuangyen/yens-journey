import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div>
          <Link to="/" className="footer-logo">
            Yen&apos;s Journey
          </Link>

          <p>
            Notes on travel, AI, frontend development, and parenting across
            countries.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/affiliate">Affiliate Disclosure</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
