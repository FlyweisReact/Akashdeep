/** @format */
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../../Images/13.png";
import img6 from "../../../../Images/14.png";
import { useRef , useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);



  const settings = {
    dots: false,
    infinite: false,
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

  useEffect(() => {
    // Reset the current slide index to 0 after each slide transition
    setCurrentSlide(0);
  }, []);
  const data = [
    {
      img: "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=",
      star: 5,
    },
    {
      img: "https://st3.depositphotos.com/4678277/36460/i/600/depositphotos_364603550-stock-photo-portrait-of-positive-cheerful-excited.jpg",
      star: 5,
    },
    {
      img: "https://media.istockphoto.com/id/1415877159/photo/only-the-truth-honest-proud-curly-haired-young-african-american-woman-in-casual-t-shirt.jpg?s=612x612&w=0&k=20&c=Tl9wKaaamc3UkMJ2iG9fwfBN441P7Dw36WZw4sNNoJs=",
      star: 5,
    },
    {
      img: "https://blog.hubspot.com/hubfs/Testimonial-lead-gen-1.jpg",
      star: 5,
    },
    {
      img: "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=",
      star: 5,
    },
    {
      img: "https://st3.depositphotos.com/4678277/36460/i/600/depositphotos_364603550-stock-photo-portrait-of-positive-cheerful-excited.jpg",
      star: 5,
    },
    {
      img: "https://media.istockphoto.com/id/1415877159/photo/only-the-truth-honest-proud-curly-haired-young-african-american-woman-in-casual-t-shirt.jpg?s=612x612&w=0&k=20&c=Tl9wKaaamc3UkMJ2iG9fwfBN441P7Dw36WZw4sNNoJs=",
      star: 5,
    },
    {
      img: "https://blog.hubspot.com/hubfs/Testimonial-lead-gen-1.jpg",
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

        <div className="Prev_Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
