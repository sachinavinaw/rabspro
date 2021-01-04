import React from "react";
import "../../assets/css/carousel.css";
import slider1 from "../../assets/images/movie/slider-1.jpg";
import movie1 from "../../assets/images/movie/movie01.jpg";
import movie2 from "../../assets/images/movie/movie02.jpg";
import movie3 from "../../assets/images/movie/movie03.jpg";
import movie4 from "../../assets/images/movie/movie04.jpg";

function MainCarousel() {
  return (
    <div className="container">
      <div className="carousel">
        <div className="slider-image-container">
          <img src={slider1} />
        </div>
      </div>

      <section className="mb-5">
        <h2 className="title mt-3 mb-3">Movies</h2>
        <div className="row">
          <div className="col-sm-3">
            <div className="image-container">
              <img src={movie1} />
            </div>
            <div className="image-details">
              <h5>Alone</h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="image-container">
              <img src={movie2} />
            </div>
            <div className="image-details">
              <h5>Mars</h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="image-container">
              <img src={movie3} />
            </div>
            <div className="image-details">
              <h5>Venus</h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="image-container">
              <img src={movie4} />
            </div>
            <div className="image-details">
              <h5>On Watch</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainCarousel;
