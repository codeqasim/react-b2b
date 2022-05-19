import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material/";
import Card from "./EverydayCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div>
          <Slider {...settings}>
            <div>
              <h3>
                {" "}
                <Card />{" "}
              </h3>
            </div>
            <div>
              <h3>
                <Card />
              </h3>
            </div>
            <div>
              <h3>
                <Card />
              </h3>
            </div>
            <div>
              <h3>
                <Card />
              </h3>
            </div>
            <div>
              <h3>
                <Card />
              </h3>
            </div>
            <div>
              <h3>
                <Card />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
