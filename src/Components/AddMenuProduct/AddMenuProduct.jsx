import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


export function AddMenuProduct() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setData(res.data);
      })
  }, [])
  console.log(data);
  return (
    // <Link to={`/:id`}>
    <Box sx={{display:"flex",flexWrap:"wrap" ,gap:"30px"}}>
    {
      data?.map(item => {
        return (
          <Card sx={{ width: "300px", display: "flex", direction: "column", alignItems: "center", height: "500px", background: "rgba(65, 212, 129, 0.225289)",marginTop:"25px" }}>

            <CardActionArea>
              <CardMedia
                component="img"
                height="270px"
                width="300px"
                image={item.image}
                alt="green iguana"
              />
              <CardContent sx={{ textDecoration: "none" }}>
                <Typography variant="h2" color="text.secondary" sx={{ marginBottom: "5px", overflow: "hidden" ,fontSize:"20px",textAlign:"center"}}>
                  {item.title}
                </Typography>
                <Typography variant="h2" color="text.secondary" sx={{ marginBottom: "5px", overflow: "hidden" ,fontSize:"20px",textAlign:"center"}}>
                  {item.category}
                </Typography>
                <Typography variant='p' sx={{ margin: "10px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                <StarBorderPurple500Icon sx={{color:"yellow",fontSize:"30px",marginLeft:"13px"}}/>
               {item.rating.rate} 
                </Typography>
                <Typography variant='h5' sx={{ margin: "15px 70px" }}>
                  {item.price} .y.e
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
        })}
</Box>
    // </Link>
  )
}