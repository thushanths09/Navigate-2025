import React, { useRef } from 'react';
import './VideoSlider.css';

const VideoSlider = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) { // Each video is 25% width, so -75% for 4 slides
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="video-slider-section container">
      <h2 className="slider-heading">Past Event Highlights</h2> {/* Add a heading here */}
      <div className="video-slider">

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/hYT3tDcGGAo"
                  title="Event Highlight 1"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
            <li>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/0k_Ugh1Aq0U"
                  title="Event Highlight 2"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
            <li>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/ISy0DYXuEgc"
                  title="Event Highlight 3"
                  allowFullScreen
                ></iframe>
               </div>
            </li>
            <li>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/oti1MmpjXLE"
                  title="Event Highlight 4"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
