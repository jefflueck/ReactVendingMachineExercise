import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link exact to="soda">
        <button>Soda</button>
      </Link>
      <Link exact to="chips">
        <button>Chips</button>
      </Link>
      <Link exact to="freshsardines">
        <button>Fresh Sardines</button>
      </Link>
    </nav>
  );
};

export default Navbar;
