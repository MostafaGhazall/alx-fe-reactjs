import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f3f3f3' }}>
      <Link to="/" style={{ margin: '10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '10px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;