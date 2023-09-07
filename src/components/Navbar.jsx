import React from 'react';
import './Navcards.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Cartoons</a></li>
        <li className="nav-item"><a href="/games">Games</a></li>
        <li className="nav-item"><a href="/about">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
