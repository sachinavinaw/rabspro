import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItems: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`https://picsum.photos/v2/list?limit=6`, {})
      .then((res) => {
        this.setState({
          galleryItems: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Carousel>
        {this.state.galleryItems.map((galleryItem, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={galleryItem.download_url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default App;
