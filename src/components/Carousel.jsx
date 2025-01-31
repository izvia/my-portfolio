import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/pic1.jpg"; // Replace with your image paths
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
  

function Carousel() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="carousel-container">
      <header className="carousel-header">
        <h2>My Latest Photoshoot</h2>
        <p>
          A collection of my most recent work
        </p>
      </header>
      <Slider {...settings} className="slider">
        <div>
          <img src={pic1} alt="Image 1" className="carousel-image" />
        </div>
        <div>
          <img src={pic2} alt="Image 2" className="carousel-image" />
        </div>
        <div>
          <img src={pic4} alt="Image 4" className="carousel-image" />
        </div>
        <div>
          <img src={pic5} alt="Image 5" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
