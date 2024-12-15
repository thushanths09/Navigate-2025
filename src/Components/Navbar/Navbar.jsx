import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';  // Import Link from react-scroll
import './Navbar.css'
import logo from '../../assets/logos/1.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className={`${sticky ? 'dark-nav': ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="dummy" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="Event_des" smooth={true} duration={500}>About Event</Link>
        </li>
        <li>
          <Link to="About_us" smooth={true} duration={500}>About Us</Link>
        </li>
        <li>
          <Link to="FAQ" smooth={true} duration={500}>FAQ</Link>
        </li>
        <li>
          <Link to="Contacts" smooth={true} duration={500}>Contact Us</Link>
        </li>
        <li>         <button className="btn">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </button></li> 
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar;
