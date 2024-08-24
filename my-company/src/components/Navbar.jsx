import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
      backgroundColor: '#f3f3f3'
    }}>
      <Link to="/home" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
      }}>Home</Link>
      <Link to="/about" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
      }}>About</Link>
      <Link to="/services" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
      }}>Services</Link>
      <Link to="/contact" style={{
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
      }}>Contact</Link>
    </nav>
  );
}

export default Navbar;