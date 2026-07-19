import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const menuItems = [
  { label: 'Travel', path: '/travel' },
  { label: 'Tech', path: '/tech' },
  { label: 'Parenting', path: '/parenting' },
  { label: 'About', path: '/about' },
];

function Navbar() {
  const [status, setStatus] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // 換頁時關閉 drawer
  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  // 開啟 drawer 時禁止 body 捲動
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setStatus('top');
      } else if (currentScrollY > lastScrollY) {
        setStatus('hidden');
      } else {
        setStatus('visible');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getNavbarStyle = () => {
    const baseStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 1000,
      transition:
        'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s, box-shadow 0.4s, backdrop-filter 0.4s',
    };

    if (status === 'top') {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backdropFilter: 'none',
      };
    }

    if (status === 'hidden') {
      return {
        ...baseStyle,
        transform: 'translateY(-100%)',
        backgroundColor: 'rgba(250, 248, 245, 0.92)',
        backdropFilter: 'blur(12px)',
      };
    }

    return {
      ...baseStyle,
      transform: 'translateY(0)',
      backgroundColor: 'rgba(250, 248, 245, 0.92)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
      borderBottom: '1px solid rgba(235, 226, 214, 0.5)',
    };
  };

  const isOnHero = status === 'top';

  // 漢堡線條顏色：Hero 上用暖白，否則用深綠
  const hamburgerColor = isOnHero ? '#faf8f5' : '#37473b';

  return (
    <>
      <header style={getNavbarStyle()}>
        {/* ── Logo ── */}
        <NavLink to='/' className='navbar-logo' aria-label='Go to homepage'>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              color: isOnHero ? '#faf8f5' : '#1e2b21',
              marginRight: '1px',
            }}
          >
            YEN
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: isOnHero ? 'rgba(250,248,245,0.7)' : 'rgba(30,43,33,0.55)',
            }}
          >
            Journey
          </span>
        </NavLink>

        {/* ── 桌面版 Nav ── */}
        <nav className='navbar-desktop-nav' aria-label='Main navigation'>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0,
            }}
          >
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className='navbar-item'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.01em',
                    color: isOnHero
                      ? isActive
                        ? '#faf8f5'
                        : 'rgba(250,248,245,0.62)'
                      : isActive
                        ? '#1e2b21'
                        : '#8a9e8d',
                    transition: 'color 0.2s ease',
                    borderBottom: isActive
                      ? `1.5px solid ${isOnHero ? '#faf8f5' : '#37473b'}`
                      : '1.5px solid transparent',
                    paddingBottom: '2px',
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── 漢堡按鈕（手機版）── */}
        <button
          className={`navbar-hamburger ${drawerOpen ? 'open' : ''}`}
          onClick={() => setDrawerOpen((prev) => !prev)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span style={{ backgroundColor: hamburgerColor }} />
          <span style={{ backgroundColor: hamburgerColor }} />
          <span style={{ backgroundColor: hamburgerColor }} />
        </button>
      </header>

      {/* ── 手機版 Drawer ── */}
      <div
        className={`navbar-drawer ${drawerOpen ? 'open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navbar-item ${isActive ? 'active-drawer' : ''}`
                }
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
