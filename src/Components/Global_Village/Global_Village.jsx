import React from 'react'
import './Global_Village.css'
import ph1 from '../../assets/background/t.jpg'
import ph2 from '../../assets/background/m.jpg'
import ph3 from '../../assets/background/k.jpg'
const Global_Village = () => {
  return (
    <div className='des'>
      <div className="Event">
        <h3 className='nav_head'>
          About global village
        </h3>
        <p className='navigate'>
        A key highlight of Navigate is the Global Village, where participants can interact with youth from various countries, experience different cultures, and broaden their global perspective.
Participants will be able to enjoy various cultural delicacies and performances, engage in fun games and activities throughout the event day, and gather everlasting memories.

        </p>
      </div>
      <div className='gl_images'>
        <div className='gl_image'>
          <img src={ph1} alt=""/>
        </div>
        <div className='gl_image'>
          <img src={ph2} alt=""/>
        </div>
        <div className='gl_image'>
          <img src={ph3} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Global_Village;
