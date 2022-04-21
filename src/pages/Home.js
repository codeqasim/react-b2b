import * as React from 'react';
import {Box,InputAdornment,TextField,IconButton,Link} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Slick from '../components/SlickCarousel'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function FullWidthTextField() {
  return (
    <div>
      <Box >
      <TextField sx={{ border:'1px solid #ceefeb',borderRadius:'4px', backgroundColor:'#fafafa',
      "&:active": {
      borderColor: "transparent",
    }, }} fullWidth placeholder="Search here..." id="fullWidth"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
         
          <IconButton aria-label="Example">
          <MicIcon />
</IconButton>
        </InputAdornment>
      ),
    }}
     />
     <Box sx={{ width:'100%' }}>
     <Slick />
     </Box>
    
    </Box   >
    </div>
  );
}



