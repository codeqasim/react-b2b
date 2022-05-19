import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function ImgMediaCard() {
  return (
    <Card sx={{ mx: "5px", cursor: "pointer" }}>
      <CardMedia
        sx={{ width: "70%", mx: "auto", pt: 1 }}
        component="img"
        alt="green iguana"
        image="/assets/img/12.png"
      />
      <CardContent>
        <Typography fontSize="14px" color="#222" fontWeight="600" gutterBottom>
          Assorted Capsicum Combo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          500g
        </Typography>
        <Typography fontSize="14px" color="#222" fontWeight="600">
          $25.00{" "}
          <span>
            <AddBoxIcon className="add-btn" sx={{ fontSize: 30 }} />
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
