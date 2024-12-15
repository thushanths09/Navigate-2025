import React from 'react'
import './About_us.css'
import imag1 from '../../assets/background/aiesec.jpg'
import imag2 from '../../assets/location-icon.png'
import imag3 from '../../assets/mail-icon.png'
import imag4 from '../../assets/phone-icon.png'
import imag5 from '../../assets/play-icon.png'
const About_us = () => {
  return (
    <div className='about_us' id='About_us'>
      <div className="left">
        <img src ={imag1} className='imag' alt='' />
      </div>
      <div className="right">
        <h1>ABOUT AIESEC</h1>
        <p>
        AIESEC is the world's largest youth-run organization, striving to achieve peace and the fulfilment of humankind's potential.We are a non-governmental, non-profit organization, which enables young people to develop their leadership potential through cross-cultural experiences, and global volunteering experiences.
        </p>
        <div className='logos'>
          <div className="logo-item">
            <img src ={imag2} className='ico' alt='' />
            <p>Presence in 120+
          Countries</p>
          </div>
          <div className="logo-item">
            <img src ={imag3} className='ico' alt='' />
            <p>40,000+
            Active Members</p>
          </div>
          <div className="logo-item">
          <img src ={imag4} className='ico' alt='' />
          <p>Over 1M Developed Since 1948</p>
          </div>
          <div className="logo-item">
          <img src ={imag5} className='ico' alt='' />
          <p>30,000+
          Experiences Every Year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_us
