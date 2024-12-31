import React, { useState, useEffect } from "react";
import "./dummy.css";
import img1 from "../../assets/background/b.jpg";
import img2 from "../../assets/background/c.jpg";
import img3 from "../../assets/background/d.jpg";
import img4 from "../../assets/background/e.jpg";
import img5 from "../../assets/background/f.jpg";

const Dummy = () => {
  const sliderImages = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container" id="dummy">
      <div className="slider">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${currentIndex === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </div>
      <div className="dot-navigation">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <div className="dummy_head">
        <h1 className="main-title">NAVIGATE</h1>
        <p className="quote">To Redefine Your Story</p>
      </div>
    </div>
  );
};

export default Dummy;
