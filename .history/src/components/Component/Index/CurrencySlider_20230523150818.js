/** @format */

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/9.png";
import img1 from "../../../Images/10.png";
import img2 from "../../../Images/11.png";
import img4 from "../../../Images/12.png";
import img5 from "../../../Images/13.png";
import img6 from "../../../Images/14.png";

const CurrencySlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="slick-slider-Cont">
        <Slider {...settings} ref={sliderRef}>

            <div>
            <p></p>
            </div>

        </Slider>
        <div className="Prev-Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CurrencySlider;
