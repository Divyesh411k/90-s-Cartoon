import React from 'react';
import './Navcards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Cartoons</a></li>
        <li className="nav-item"><a href="/games">Games<FontAwesomeIcon icon="fa-solid fa-gamepad" /></a></li>
        <li className="nav-item"><a href="/about">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
