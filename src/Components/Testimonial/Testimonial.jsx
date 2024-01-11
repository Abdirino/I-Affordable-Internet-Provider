import React from "react";
import "./Testimonial.css";
import Face1 from "../../Images/Face 1.jpg";
import Face2 from "../../Images/Face 2.jpg";
import Face3 from "../../Images/Face 3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="test-container">
        <h1>What Our Customers Say💬</h1>
      <div className="testimonial">
        <div className="test-content">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            autoplay={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="slide">
              <img src={Face1} alt="" className="image" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                facilis possimus illum ducimus ad pariatur quaerat, eos
                reprehenderit beatae laudantium id repellendus aperiam expedita
                ea delectus ipsa, qui iure aliquid?
              </p>
              <i class="fa-solid fa-quote-left quote"></i>
              <div className="details">
                <span className="name">Abdikadir Arab</span>
                <span className="job">Hotel Manager</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={Face2} alt="" className="image" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                facilis possimus illum ducimus ad pariatur quaerat, eos
                reprehenderit beatae laudantium id repellendus aperiam expedita
                ea delectus ipsa, qui iure aliquid?
              </p>
              <i class="fa-solid fa-quote-left quote"></i>
              <div className="details">
                <span className="name">Mohammed Abdullah</span>
                <span className="job">Retail Manager</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={Face3} alt="" className="image" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                facilis possimus illum ducimus ad pariatur quaerat, eos
                reprehenderit beatae laudantium id repellendus aperiam expedita
                ea delectus ipsa, qui iure aliquid?
              </p>
              <i class="fa-solid fa-quote-left quote"></i>
              <div className="details">
                <span className="name">John Doe</span>
                <span className="job">Web Developer</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
