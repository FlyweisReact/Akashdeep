/** @format */
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../../Images/15.png";
import img6 from "../../../../Images/16.png";
import { useRef  , useEffect} from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const determineCenterSlide = (currentSlide, slidesToShow) => {
    const centerIndex = Math.floor((currentSlide + slidesToShow / 2) % slidesToShow);
    return centerIndex >= 0 ? centerIndex : centerIndex + slidesToShow;
  };

  const centerIndex = determineCenterSlide(currentSlide, settings.slidesToShow);


  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const data = [
    {
      img: "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72aEsvFKoRJpfaWB4G1ftrlpe8tN5O6rPhigr1s7UmPYWxH3PeYE2Z1Gqmv8VnT8qtsc&usqp=CAU",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU",
      star: 5,
    },
  ];

  return (
    <>
      <div className="Index_testimonial_Slider">
        <p className="head">What our Client Says</p>
        <Slider {...settings} ref={sliderRef}  className="Slider_Cont">    
          {data.map((i , index) => (
            <div  key={index}  className={centerIndex === index ? 'active_slide' : 'normal_div'}  >
              <img src={i.img} alt="" />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          ))}
          
      
        </Slider>

        <div className="content_div">
          <p>
            Torem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
            vulputate libero et velit <br /> interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="Prev-Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
