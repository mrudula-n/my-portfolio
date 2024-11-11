import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const NavLink = ({ text, href }) => (
  <Link to={href} className="nav-link">
    {text}
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date();
  const date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <header>
      <div className="header-nav">
        <div className="header-left">
          <div className="date-display">
            <div>{date}</div>
            <div className="weekday">{weekday}</div>
          </div>
        </div>
        <div className="header-right">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776; {/* Hamburger icon */}
          </button>
          <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <NavLink text="Home" href="/" />
            <NavLink text="About" href="/about" />
            <NavLink text="Projects" href="/projects" />
            <NavLink text="Skills" href="/skills" />
            <NavLink text="Contact" href="/contact" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
