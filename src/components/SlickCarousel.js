import React, { Component } from "react";
import Slider from "react-slick";
import {Box} from '@mui/material/';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
    };
    return (
      <>
        <h2> Single Item</h2>
        <Slider {...settings}>
         <Box>
         <img  src="/assets/img/home2.jpeg" height='auto' width='100%px'/>
         </Box>
         <Box>
         <img  src="/assets/img/home1.jpeg" height='auto' width='100%px'/>
         </Box>
        </Slider>
      </>
    );
  }
}