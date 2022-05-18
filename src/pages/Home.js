import * as React from "react";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
  Divider,
  Grid,
  Link,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  ButtonGroup,
  Button,
} from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Slick from "../components/SlickCarousel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RecentlySlick from "../components/RecentlySlick";
import LowPrice from "../components/LowPriceSlick";
import Everyday from "../components/EverydaySlick";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "../actions/index.js";

export default function FullWidthTextField() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  // const Increasebtn = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };

  const styles = {
    paperContainer: {
      width: "98%",
      backgroundImage: `url(${"/assets/img/backimg.png"})`,
      backgroundRepeat: "no-repeat",
      height: "auto",
    },
  };
  const images = [
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
    {
      url: "/assets/img/2.png",
      name: "Rice, Flour & Grains",
    },
  ];
  const cardImages = [
    {
      url: "/assets/img/8.png",
    },
    {
      url: "/assets/img/8.png",
    },
    {
      url: "/assets/img/8.png",
    },
  ];
  return (
    <div>
      <Box pt={8}>
        <TextField
          sx={{
            border: "1px solid #ceefeb",
            borderRadius: "4px",
            backgroundColor: "#fafafa",
            "&:active": {
              borderColor: "transparent",
            },
          }}
          fullWidth
          placeholder="Search here..."
          id="fullWidth"
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

        <Box>
          <Slick />
        </Box>

        <Box mt={3} p={2} style={styles.paperContainer}>
          <Typography
            gutterBottom
            fontSize="17px"
            fontWeight="700"
            lineHeight="22px"
          >
            Buy from Recently Bought
          </Typography>
          <RecentlySlick />
        </Box>

        <Box my={2}>
          <Divider
            sx={{ fontSize: "17px", fontWeight: 700, lineHeight: "22px" }}
          >
            Shop By Category
          </Divider>
        </Box>

        <Box>
          <Grid container spacing={2}>
            {images.map((image) => (
              <Grid item xs={3}>
                <CardActionArea
                  sx={{
                    "&:hover": {
                      color: "transparent!important",
                    },
                  }}
                >
                  <Box
                    p={1}
                    sx={{ backgroundColor: "#fff9d8", borderRadius: "20%" }}
                  >
                    <CardMedia
                      component="img"
                      alt={image.title}
                      image={image.url}
                    />
                  </Box>
                  <CardContent sx={{ pb: "0px" }}>
                    <Typography
                      fontSize="16px"
                      fontWeight="500"
                      color="#222222"
                      lineHeight="24px"
                    >
                      {image.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box p={2} my={2} sx={{ backgroundColor: "#edf8f8" }}>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <Typography
              fontSize="17px"
              fontWeight="700"
              color="#222222"
              variant="body1"
            >
              Say hello to Offers!
            </Typography>

            <Box ml="auto" display="flex">
              <Typography fontSize="14px" fontWeight="600" lineHeight="21px">
                <Link color="#0baf9a" href="#" underline="none">
                  {"see all"}
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="#777777"
            lineHeight="21px"
            gutterBottom
          >
            Best price ever of all the time
          </Typography>

          <Card sx={{ display: "flex", mt: 2, borderRadius: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: 65, height: 65, p: 2 }}
              image="/assets/img/8.png"
              alt="Live from space album cover"
              width="80px"
            />
            <Divider sx={{ my: 3 }} orientation="vertical" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  Assorted Capsicum Combo
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight="400"
                  color="#777777"
                  lineHeight="21px"
                >
                  500g
                </Typography>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  $25.00 <span className="off-price">50% off</span>
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "auto",
                pt: 5,
                pr: 2,
              }}
            >
              <Box sx={{ border: "1px solid rgba(11,175,154,0.09)" }}>
                <ButtonGroup>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="reduce"
                    onClick={() => {
                      setNumber(Math.max(number - 1, 0));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography sx={{ pt: 0.5, mx: 0.5, color: "#0baf9a" }}>
                    {number}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="increase"
                    onClick={() => {
                      setNumber(number + 1);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: "flex", mt: 2, borderRadius: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: 65, height: 65, p: 2 }}
              image="/assets/img/8.png"
              alt="Live from space album cover"
              width="80px"
            />
            <Divider sx={{ my: 3 }} orientation="vertical" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  Assorted Capsicum Combo
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight="400"
                  color="#777777"
                  lineHeight="21px"
                >
                  500g
                </Typography>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  $25.00 <span className="off-price">50% off</span>
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "auto",
                pt: 5,
                pr: 2,
              }}
            >
              <Box sx={{ border: "1px solid rgba(11,175,154,0.09)" }}>
                <ButtonGroup>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="reduce"
                    onClick={() => {
                      setState(Math.max(state - 1, 0));
                    }}
                    u
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography sx={{ pt: 0.5, mx: 0.5, color: "#0baf9a" }}>
                    {state}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="increase"
                    onClick={() => {
                      setState(state + 1);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: "flex", mt: 2, borderRadius: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: 65, height: 65, p: 2 }}
              image="/assets/img/8.png"
              alt="Live from space album cover"
              width="80px"
            />
            <Divider sx={{ my: 3 }} orientation="vertical" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  Assorted Capsicum Combo
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight="400"
                  color="#777777"
                  lineHeight="21px"
                >
                  500g
                </Typography>
                <Typography
                  fontSize="15px"
                  fontWeight="600"
                  color="#222222"
                  lineHeight="23px"
                >
                  $25.00 <span className="off-price">50% off</span>
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "auto",
                pt: 5,
                pr: 2,
              }}
            >
              <Box sx={{ border: "1px solid rgba(11,175,154,0.09)" }}>
                <ButtonGroup>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="INCREMENT"
                    onClick={ () => {
                      dispatch(decNumber())
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography sx={{ pt: 0.5, mx: 0.5, color: "#0baf9a" }}>
                    {myState}
                  </Typography>
                  <Button
                    sx={{
                      color: "black",
                      "&:hover": {
                        bgcolor: "transparent!important",
                      },
                    }}
                    variant="text"
                    aria-label="increase"
                    onClick={ () => {
                      dispatch(incNumber())
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Card>
        </Box>

        <Box>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <Typography
              fontSize="17px"
              fontWeight="700"
              color="#222222"
              variant="body1"
            >
              Lowest Price
            </Typography>

            <Box ml="auto" display="flex">
              <Typography fontSize="14px" fontWeight="600" lineHeight="21px">
                <Link color="#0baf9a" href="#" underline="none">
                  {"see all"}
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="#777777"
            lineHeight="21px"
            gutterBottom
          >
            Pay less, Get More
          </Typography>
        </Box>

        <Box>
          <LowPrice />
        </Box>

        <Box>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <Typography
              fontSize="17px"
              fontWeight="700"
              color="#222222"
              variant="body1"
            >
              Everyday Essentials
            </Typography>

            <Box ml="auto" display="flex">
              <Typography fontSize="14px" fontWeight="600" lineHeight="21px">
                <Link color="#0baf9a" href="#" underline="none">
                  {"see all"}
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="#777777"
            lineHeight="21px"
            gutterBottom
          >
            Best price ever of all the time
          </Typography>
        </Box>

        <Box>
          <Everyday />
        </Box>

        <Box>
          <Typography
            fontSize="20px"
            fontWeight="600"
            color="#cacaca"
            lineHeight="28px"
            gutterBottom
          >
            Didn’t find what you were looking for?
          </Typography>
        </Box>
        <Box pb={5}>
          <Button
            sx={{
              backgroundColor: "#0baf9a",
              border: "1px solid #ceefeb",
              borderRadius: "5px",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "21px",
              px: 2.5,
              py: 1.3,
              color: "white",
              "&:hover": {
                backgroundColor: "#0baf9a",
              },
            }}
            variant="text"
          >
            Browse Category
          </Button>
        </Box>
      </Box>
    </div>
  );
}
