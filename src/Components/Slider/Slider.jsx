// src/Components/Slider/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="event-highlights">
      <h2>Past Event Highlights</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="highlight-slider"
      >
        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your first video ID
              title="Event Highlight 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/3JZ_D3ELwOQ" // Replace with your second video ID
              title="Event Highlight 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/7nIuAkR9edw" // Replace with your third video ID
              title="Event Highlight 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/9bZkp7q19f0" // Replace with your fourth video ID
              title="Event Highlight 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
