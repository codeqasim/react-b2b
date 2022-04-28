import React, { Component } from "react";
import Slider from "react-slick";
import {Box,Typography,Button} from '@mui/material/';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 5.5,
     
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <Box sx={{ cursor:'pointer' }} my={0.5} textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%' >
          <img className="text-center" src="/assets/img/7.png" height='auto' width='100%' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
          <Box sx={{ cursor:'pointer' }} my={0.5}  textAlign='center' backgroundColor='#fff' p={2} borderRadius='10px' maxWidth='60%'>
          <img className="borderRadius" src="/assets/img/7.png" height='auto' width='100%px' />
          </Box>
        </Slider>
      </div>
    );
  }
}