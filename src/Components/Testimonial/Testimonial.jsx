import React from "react";
import "./Testimonial.css";
import Face1 from "../../Images/Face 1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <div className="test-container">
      <div className="testimonial">
        <div className="test-content">
          <div className="slide">
            <img src={Face1} alt="" className="image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              facilis possimus illum ducimus ad pariatur quaerat, eos
              reprehenderit beatae laudantium id repellendus aperiam expedita ea
              delectus ipsa, qui iure aliquid?
            </p>
            <i class="fa-solid fa-quote-left quote"></i>
            <div className="details">
              <span className="name">Abdikadir Arab</span>
              <span className="job">Hotel Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
