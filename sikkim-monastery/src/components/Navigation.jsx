import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sikkimicon from '../images/visitSikkim.jpg';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/virtual-tours', label: 'Virtual Tours' },
    { path: '/map', label: 'Map' },
    { path: '/archives', label: 'Archives' },
    { path: '/audio-guide', label: 'Audio Guide' },
    { path: '/events', label: 'Calendar' },
    // { path: '/booking', label: 'Booking' },
    // { path: '/calendar', label: 'Calendar'},
    { path: '/bookingpage', label: 'Booking'}
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img className='icon' src={sikkimicon}></img>
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;