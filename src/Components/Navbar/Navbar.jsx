import React, { useEffect, useState } from 'react'
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
        <li>Home</li>
        <li>About Event</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li><button className='btn'>Register Now</button></li> 
      </ul>
    </nav>
  )
}

export default Navbar
