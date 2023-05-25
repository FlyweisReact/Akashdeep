/** @format */

import React , {useState} from "react";
import img from "../../../../Images/18.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import img1 from "../../../../Images/13.png";
import img2 from "../../../../Images/14.png";

const TestimonialSlider = () => {
    const data = [
        {
            img : img
        },
        {
            img : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        },
        {
            img : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
        },
        {
            img : img
        },
    ]


    



  return (
    <>
      <div className="Index_testimonial_Slider">
        <p className="head">What our Client Says</p>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
          {data.map((i , index) => (
            <SwiperSlide key={index} >
              <img src={i.img} alt="slide_image" className="" />
            </SwiperSlide>
          ))}
           
    

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <img src={img1} alt="" />
              </div>
              <div className="swiper-button-next slider-arrow">
                <img src={img2} alt="" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>


   
      

    </>
  );
};

export default TestimonialSlider;
