// import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnglandMap from '../Pages/EnglandMap';
import SpainMap from '../Pages/SpainMap';
import ItalyMap from '../Pages/ItalyMap';

function Navbar() {
  return (
    <Router>
      <nav >
        <ul className='links'>
          <li><Link to="/england">England</Link></li>
          <li><Link to="/spain">Spain</Link></li>
          <li><Link to="/italy">Italy</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/england" element={<EnglandMap />} />
        <Route path="/spain" element={<SpainMap />} />
        <Route path="/italy" element={<ItalyMap />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
