import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logos/1.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Add event listener to track scroll position and update sticky state
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle the mobile menu visibility
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      {/* Logo section */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Mobile menu dropdown */}
      <ul className={mobileMenu ? 'dropdown-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <Link to="dummy" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Event_des" smooth={true} duration={500}>
            About Event
          </Link>
        </li>
        <li>
          <Link to="About_us" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="FAQ" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="Contacts" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
        <li className='btns'>
          <button className="btn">
            <a
              href="https://tally.so/r/nGoZYj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </button>
        </li>
      </ul>

      {/* Menu icon */}
      <img
        src={menu_icon}
        alt="Menu Icon"
        className={`menu-icon ${mobileMenu ? 'close' : ''}`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
