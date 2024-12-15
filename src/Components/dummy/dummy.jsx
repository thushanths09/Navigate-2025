import React, { useState, useEffect } from 'react';
import './dummy.css';
import img1 from '../../assets/background/b.jpg'; // Import images
import img2 from '../../assets/background/c.jpg';
import img3 from '../../assets/background/d.jpg';
import img4 from '../../assets/background/e.jpg'; // New Image 4
import img5 from '../../assets/background/f.jpg'; // New Image 5

const Dummy = () => {
  const sliderImages = [img1, img2, img3, img4, img5]; // Array of imported images (now 5)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up interval for auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back to the first image once the last image is reached
        return (prevIndex + 1) % sliderImages.length;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sliderImages.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index); // Set the current index when a dot is clicked
  };

  return (
    <div className="slider-container" id="dummy">
      <div className="slider">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${currentIndex === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`, // Image as background
            }}
          >
            {/* Gradient overlay */}
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </div>

      {/* Circle Dots Navigation */}
      <div className="dot-navigation">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="dummy_head">
        <h1>NAVIGATE 2025</h1>
      </div>
    </div>
  );
};

export default Dummy;
