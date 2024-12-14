import React from 'react'
import './About_ASL.css'
import imag1 from '../../assets/background/p.jpg'
import imag2 from '../../assets/location-icon.png'
import imag3 from '../../assets/mail-icon.png'
import imag4 from '../../assets/phone-icon.png'
import imag5 from '../../assets/play-icon.png'
const About_ASL = () => {
  return (
    <div className='about_us'>
      <div className="left">
        <img src ={imag1} className='imag' alt='' />
      </div>
      <div className="right">
        <h1>ABOUT AIESEC IN SRI LANKA</h1>
        <p>
        AIESEC Sri Lanka, a member chapter of AIESEC International, was founded in 1995. AIESEC's investment in youth leadership development allows multinational organizations to gain access to youth opinion, recruit top talent, enhance their image among youth, and position themselves as socially responsible businesses. The organization has over 1000 active members from 21 universities in Sri Lanka. 
        </p>
        <div className='logos'>
          <div className="logo-item">
            <img src ={imag2} className='ico' alt='' />
            <p>21+
          Universities</p>
          </div>
          <div className="logo-item">
            <img src ={imag3} className='ico' alt='' />
            <p>1500+
            Active Members</p>
          </div>
          <div className="logo-item">
          <img src ={imag4} className='ico' alt='' />
          <p>100+ Social Project
            Every Year
          </p>
          </div>
          <div className="logo-item">
          <img src ={imag5} className='ico' alt='' />
          <p>1500+
          Experiences Every Year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_ASL;
