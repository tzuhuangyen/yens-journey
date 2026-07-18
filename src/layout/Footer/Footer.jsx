import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        {/* Brand */}
        <div className='footer-brand'>
          <Link to='/' className='footer-logo'>
            <span className='footer-logo-yen'>YEN</span>
            <span className='footer-logo-journey'> Journey</span>
          </Link>
          <p className='footer-tagline'>
            Explore the World.
            <br />
            Learn Every Day.
          </p>
        </div>

        {/* Nav Links */}
        <div className='footer-nav'>
          <p className='footer-nav-label'>Pages</p>
          <ul>
            <li>
              <Link to='/travel'>Travel</Link>
            </li>
            <li>
              <Link to='/tech'>Tech</Link>
            </li>
            <li>
              <Link to='/parenting'>Parenting</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className='footer-connect'>
          <p className='footer-nav-label'>Connect</p>
          <ul>
            <li>
              <a
                href='https://github.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href='mailto:hello@yenjourney.com'>Email</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='footer-bottom'>
        <p>© 2025 YEN Journey</p>
        <p>Made with React + ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
