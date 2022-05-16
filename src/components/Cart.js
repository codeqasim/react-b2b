import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography,Box,Divider,ButtonGroup,CardActionArea} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function MediaCard() {
    const [count, setCount] = React.useState(2);
  return (
    <div>
       <Box p={3}>
           <Box>
               <Typography fontSize='24px' lineHeight='32px' fontWeight={700} color='#212121' variant="h4" gutterBottom>Shopping cart</Typography>
           </Box>
           <Divider sx={{ my:2 }} />
       <Card sx={{ display: 'flex',mt:2,borderRadius:'10px' }}>
       <CardMedia
         component="img"
         sx={{ width: 65, height: 65,p:2 }}
         image='/assets/img/8.png'
         alt="Live from space album cover"
         width="80px"
       />
       <Divider sx={{ my:3 }} orientation="vertical" flexItem/>
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <CardContent sx={{ flex: '1 0 auto' }}>
           <Typography fontSize='15px' fontWeight='600' color='#222222' lineHeight='23px'>
           Assorted Capsicum Combo
           </Typography>
           <Typography fontSize='14px' fontWeight='400' color='#777777' lineHeight='21px'>
           500g
           </Typography>
           <Typography fontSize='15px' fontWeight='600' color='#222222' lineHeight='23px'>
           $25.00 <span className='off-price'>50% off</span>
           </Typography>
         </CardContent>
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column',ml:'auto', pt:5, pr:2 }}>
         <Box sx={{ border:'1px solid rgba(11,175,154,0.09)' }}>
       <ButtonGroup>
           <Button
           sx={{ color:'black',"&:hover": {
             bgcolor:'transparent!important',
           }, }}
           variant="text"
             aria-label="reduce"
             onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
           >
             <RemoveIcon fontSize="small" />
           </Button>
          <Typography sx={{ pt:0.5,mx:0.5,color:'#0baf9a' }}>{count}</Typography>
           <Button
           sx={{ color:'black',"&:hover": {
             bgcolor:'transparent!important',
           }, }}
           variant="text"
             aria-label="increase"
             onClick={() => {
              setCount(count + 1);
            }}
           >
             <AddIcon fontSize="small" />
           </Button>
         </ButtonGroup>
         </Box>
       </Box>
     </Card>

     <Box sx={{ position: 'fixed', bottom: 10, left: 805, right: 15 }}>
     <Card >
      <CardActionArea>
        <Box p={2} sx={{ border: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor:'#0baf9a',borderRadius:'10px' }}>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <Typography
              fontSize="17px"
              color="#fff"
              variant="body1"
            >
              Proceed To Checkout
            </Typography>

            <Box ml="auto" display="flex">
            <Divider sx={{ backgroundColor:'#fff' }} orientation="vertical"  flexItem />
              <Typography sx={{ ml:2,pt:'2px' }} fontSize="18px" color='#fff' lineHeight="21px">
                $ 150
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>


    
     </Box>
       </Box>
    </div>
  );
}
