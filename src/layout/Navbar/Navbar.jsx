import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const menuItems = [
  { label: 'Travel', path: '/travel' },
  { label: 'Tech', path: '/tech' },
  { label: 'Parenting', path: '/parenting' },
  { label: 'About', path: '/about' },
];

function Navbar() {
  const [status, setStatus] = useState('top'); // 'top', 'visible', 'hidden'
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        // 滾動到最上方：完全融入背景
        setStatus('top');
      } else if (currentScrollY > lastScrollY) {
        // 往下滾動：隱藏 Navbar
        setStatus('hidden');
      } else {
        // 往上滾動：顯示 Navbar（帶有毛玻璃與陰影）
        setStatus('visible');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 根據滾動狀態動態計算樣式
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
      fontFamily: '"DM Sans", sans-serif',
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
        transform: 'translateY(-100%)', // 向上隱藏
        backgroundColor: 'rgba(250, 248, 245, 0.85)', // 你的暖白背景 85% 透明度
        backdropFilter: 'blur(8px)', // 毛玻璃效果
      };
    }

    if (status === 'visible') {
      return {
        ...baseStyle,
        transform: 'translateY(0)',
        backgroundColor: 'rgba(250, 248, 245, 0.85)', // 你的暖白背景 85% 透明度
        backdropFilter: 'blur(8px)', // 毛玻璃效果
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)', // 你的 Design System 柔和陰影
        borderBottom: '1px solid rgba(235, 226, 214, 0.5)', // 淡淡的米黃分界線
      };
    }

    return baseStyle;
  };

  return (
    <header style={getNavbarStyle()}>
      <NavLink to='/' className='navbar-logo' aria-label='Go to homepage'>
        <span
          className='logo-yen'
          style={{ color: '#37473B', fontWeight: 'bold', marginRight: '2px' }}
        >
          YEN
        </span>
        <span
          className='logo-journey'
          style={{ color: '#777777', fontWeight: '300' }}
        >
          Journey
        </span>
      </NavLink>

      <nav aria-label='Main navigation'>
        <ul
          className='navbar-menu'
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
                className={({ isActive }) =>
                  isActive ? 'navbar-item active' : 'navbar-item'
                }
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#37473B' : '#777777',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s',
                })}
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
