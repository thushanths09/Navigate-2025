import React from 'react'
import './Event_des.css'
import img1 from '../../assets/background/t.jpg'
import img2 from '../../assets/background/m.jpg'
import img3 from '../../assets/background/k.jpg'
const Event_des = () => {
  return (
    <div className='des' id="Event_des">
      <div className="Event">
        <h3 className='nav_head'>
          About Navigate 2025
        </h3>
        <p className='navigate'>
        Navigate is one of the largest events hosted by AIESEC in Sri Lanka, designed to engage and inspire Sri Lankan youth, particularly students who have just completed their G. C. E. Advanced Level (A/L) exams.
        The event aims to promote Global Volunteering opportunities, offering young individuals the chance to explore meaningful international experiences. A key highlight of Navigate is the Global Village, where participants can interact with youth from various countries, experience different cultures and broadening their global perspective. It is an immersive and enriching experience that fosters cultural exchange, collaboration, and a deeper understanding of global issues.


        </p>
      </div>
      <div className='images'>
        <div className='image'>
          <img src={img1} alt=""/>
        </div>
        <div className='image'>
          <img src={img2} alt=""/>
        </div>
        <div className='image'>
          <img src={img3} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Event_des
