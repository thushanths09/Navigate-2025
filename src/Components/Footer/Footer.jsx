import React from 'react'
import './Footer.css'
import aiesec from '../../assets/logos/aiesec1.png'
const Footer = () => {
  return (
    <div className='footer'>
    <div className='foot'>
      <img src={aiesec} alt='' className='container aiesec'/>
      <div className="footer_text">
      <p>
      AIESEC is a non-governmental not-for-profit organization in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO. AIESEC International Inc. is registered as a Not-for-profit Organisation under the Canadian Not-for-profit Corporations Act – 2018-02-08, Corporation Number: 1055154-6 and Quebec Business Number (NEQ) 1173457178 in Montreal, Quebec, Canada.© AIESEC 2019 Privacy Policy
      </p>
      </div>
    </div>
    <hr className="divider" />
    <p className="copyright">
        © AIESEC in Sri Lanka 2024 <br />
        Created by Navigate 2025 OC
    </p>
    </div>
    
  )
}

export default Footer;
