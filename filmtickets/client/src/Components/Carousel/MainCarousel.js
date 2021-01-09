import React, { Component } from "react";
import "../../assets/css/carousel.css";

import movie1 from "../../assets/images/movie/movie01.jpg";
import movie2 from "../../assets/images/movie/movie02.jpg";
import movie3 from "../../assets/images/movie/movie03.jpg";
import movie4 from "../../assets/images/movie/movie04.jpg";

import ImageSlider from "../Carousel/Slider";

export default class MainCarousel extends Component {
  render() {
    return (
      <div className="container">
        <ImageSlider />

        <section className="mt-5 mb-5">
          <div className="title mt-3 mb-3">
            <div className="row">
              <div className="col-sm-6">
                <h4 className="title-heading">Recomended Movies</h4>
              </div>
              <div className="col-sm-6">
                <h4 className="title-link text-right">View All</h4>
              </div>
            </div>
          </div>
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

        <section className="mt-2 mb-5">
          <div className="title mt-3 mb-3">
            <div className="row">
              <div className="col-sm-6">
                <h4 className="title-heading">Popular</h4>
              </div>
              <div className="col-sm-6">
                <h4 className="title-link text-right">View All</h4>
              </div>
            </div>
          </div>
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
}
