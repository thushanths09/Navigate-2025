import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import logo from '../../assets/logos/1.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  // Add event listener to track scroll position and update sticky state
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle the mobile menu visibility
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}> {/* Apply sticky class if scroll threshold is met */}
      <img src={logo} alt="" className="logo" /> {/* Logo section */}
      <ul className={mobileMenu ? 'dropdown-mobile-menu' : 'hide-mobile-menu'}> {/* Show or hide menu */}
        <li>
          <Link to="dummy" smooth={true} duration={500}>Home</Link> {/* Smooth scroll to "Home" section */}
        </li>
        <li>
          <Link to="Event_des" smooth={true} duration={500}>About Event</Link> {/* Smooth scroll to "About Event" section */}
        </li>
        <li>
          <Link to="About_us" smooth={true} duration={500}>About Us</Link> {/* Smooth scroll to "About Us" section */}
        </li>
        <li>
          <Link to="FAQ" smooth={true} duration={500}>FAQ</Link> {/* Smooth scroll to "FAQ" section */}
        </li>
        <li>
          <Link to="Contacts" smooth={true} duration={500}>Contact Us</Link> {/* Smooth scroll to "Contact Us" section */}
        </li>
        <li>
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
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} /> {/* Menu icon for mobile view */}
    </nav>
  );
};

export default Navbar;
