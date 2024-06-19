import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img from './logo.png';
import './navbar.css';

function Navbar() {
  const hamMenuRef = useRef(null);
  const mainNavbarRef = useRef(null);

  useEffect(() => {
    const hamMenu = hamMenuRef.current;
    const mainNavbar = mainNavbarRef.current;

    const toggleActive = () => {
      hamMenu.classList.toggle('active');
      mainNavbar.classList.toggle('active');
    };

    hamMenu.addEventListener('click', toggleActive);

    return () => {
      hamMenu.removeEventListener('click', toggleActive);
    };
  }, []);

  return (
    <>
      <div className="master-main-navbar">
        <div className="navbar-container">
          <div className="main-navbar" ref={mainNavbarRef}>
            <img className="navbar-image" src={img} alt="navbar-image" />
            <Link to="/" className="item">Home</Link>
            <Link to="/price" className="item">Price</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/form" className="item">Place Order</Link>
            <Link to="/order" className="item">Work With US??</Link>
          </div>
          <div className="hem-menu" ref={hamMenuRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
