import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';  // Import Link from react-scroll
import './Navbar.css'
import logo from '../../assets/logos/1.png'

const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[]);

  return (
    <nav className={`${sticky ? 'dark-nav': ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
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
        <li><button className='btn'>Register Now</button></li> 
      </ul>
    </nav>
  )
}

export default Navbar;
