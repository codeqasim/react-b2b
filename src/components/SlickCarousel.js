import React, { Component } from "react";
import Slider from "react-slick";
import {Box,Typography,Button} from '@mui/material/';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.1,
    };
    return (
      <>
        <Slider {...settings}>
         <Box  mt={3} >
           <Box sx={{ position:'relative' }}>
           <img className="borderRadius" src="/assets/img/home1.jpeg" height='auto' width='95%px' />
           </Box>
         <Box ml={10} sx={{ position:'absolute',top:'160px' }}>
         <Typography fontWeight='bold' lineHeight='25px' fontSize='17px' color='#222222' component="div">
         Farm Fresh Veggies
      </Typography>
      <Typography gutterBottom fontWeight='400' lineHeight='23px' fontSize='15px' color='#777777' component="div">
      Get instant delivery
      </Typography>
      <Button variant="text" sx={{ bgcolor:'#0baf9a', px:'20px', color:'white',  "&:hover": {
      bgcolor:'#0baf9a',
    }, }}>Shop Now</Button>
         </Box>
         </Box>
         <Box  mt={3}>
           <Box sx={{ position:'relative' }}>
           <img className="borderRadius" src="/assets/img/home2.jpeg" height='auto' width='95%px' />
           </Box>
         <Box ml={10} sx={{ position:'absolute',top:'160px' }}>
         <Typography fontWeight='bold' lineHeight='25px' fontSize='17px' color='#ffffff' component="div">
         Farm Fresh Veggies
      </Typography>
      <Typography gutterBottom fontWeight='400' lineHeight='23px' fontSize='15px' color='#ffffff' component="div">
      Get instant delivery
      </Typography>
      <Button variant="text" sx={{ px:'20px', bgcolor:'white', color:'#0baf9a',  "&:hover": {
      bgcolor:'white',
    }, }}>Shop Now</Button>
         </Box>
         </Box>
         
        </Slider>
      </>
    );
  }
}