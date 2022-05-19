import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  Typography,
  Box,
  Divider,
  ButtonGroup,
  CardActionArea,
} from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { pluscardprice, minuscardprice } from "../actions/index.js";

export default function MediaCard() {
  const price = useSelector((state) => state.cartprice);
  const dispatch = useDispatch();

  return (
    <div>
      <Box p={3} sx={{ width: 470 }}>
        <Box>
          <Typography
            fontSize="24px"
            lineHeight="32px"
            fontWeight={700}
            color="#212121"
            variant="h4"
            gutterBottom
          >
            Shopping cart
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
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
                    dispatch(minuscardprice());
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography sx={{ pt: 0.5, mx: 0.5, color: "#0baf9a" }}>
                  {price}
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
                    dispatch(pluscardprice());
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Card>

        <Box sx={{ position: "fixed", bottom: 15, left: 780, right: 15 }}>
          <Card>
            <CardActionArea>
              <Box
                p={2}
                sx={{
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  backgroundColor: "#0baf9a",
                  borderRadius: "10px",
                }}
              >
                <Box display="flex" sx={{ flexGrow: 1 }}>
                  <Typography fontSize="17px" color="#fff" variant="body1">
                    Proceed To Checkout
                  </Typography>

                  <Box ml="auto" display="flex">
                    <Divider
                      sx={{ backgroundColor: "#fff" }}
                      orientation="vertical"
                      flexItem
                    />
                    <Typography
                      sx={{ ml: 2, pt: "2px" }}
                      fontSize="18px"
                      color="#fff"
                      lineHeight="21px"
                    >
                      $ {price}
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
