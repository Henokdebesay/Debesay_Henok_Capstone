// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/england">England</Link></li>
        <li><Link to="/spain">Spain</Link></li>
        <li><Link to="/italy">Italy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
