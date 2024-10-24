// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const NavLink = ({ text, href }) => {
  const letters = text.split("").map((letter, index) => (
    <span key={index} className="letter" style={{ "--i": index }}>{letter}</span>
  ));

  return (
    <Link to={href} className="nav-link">
      {letters}
    </Link>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-left">
          <Link to="/" className="logo">
            SM
          </Link>
        </div>
        <ul className="header-right">
          <li><NavLink text="About" href="/about" /></li>
          <li><NavLink text="Projects" href="/projects" /></li>
          <li><NavLink text="Skills" href="/skills" /></li>
          <li><NavLink text="Contact" href="/contact" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
