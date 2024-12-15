import React from 'react'
import './Contact_Card.css'
import ocvp1 from '../../assets/people/01.jpg'
import ocvp2 from '../../assets/people/02.jpg'
import ocvp3 from '../../assets/people/03.jpg'
const Contact_Card = () => {
  return (
    <div>
      <h1 className="cts">Contact Us</h1>  
      <div className="contacts">
        <div className="ocvp">
          <img src={ocvp1} alt=""/>
        </div>
        <div className="ocvp">
          <img src={ocvp2} alt=""/>
        </div>
        <div className="ocvp">
          <img src={ocvp3} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Contact_Card
