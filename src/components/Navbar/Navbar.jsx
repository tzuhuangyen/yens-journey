import { NavLink } from 'react-router-dom';
import './Navbar.css';

const menuItems = [
  { label: 'Travel', path: '/travel' },
  { label: 'AI', path: '/ai' },
  { label: 'Frontend', path: '/frontend' },
  { label: 'Parenting', path: '/parenting' },
  { label: 'About', path: '/about' },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo" aria-label="Go to homepage">
        <span className="logo-yen">YEN</span>
        <span className="logo-journey">Journey</span>
      </NavLink>

      <nav aria-label="Main navigation">
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'navbar-item active' : 'navbar-item'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
