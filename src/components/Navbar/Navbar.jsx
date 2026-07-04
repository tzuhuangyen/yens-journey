import './Navbar.css';

const menuItems = ['Travel', 'AI', 'Frontend', 'Parenting', 'About'];

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar-logo'>
        <span className='logo-yen'>YEN</span>

        <span className='logo-journey'>Journey</span>
      </div>

      <nav>
        <ul className='navbar-menu'>
          {menuItems.map((item) => (
            <li key={item} className='navbar-item'>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
