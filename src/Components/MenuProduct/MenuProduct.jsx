import * as React from 'react';
import {Link} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

//

export function MenuProduct() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);};

    // card
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
              setData(res.data);
            })
    },[])
    console.log(data)
  return (
    <>
      <Box sx={{ width: '100%', margin: "30px 0" }}>
        <Tabs
          value={value}
          onChange={handleChange}

        >
          <Tab
            sx={{ fontSize: "15px" }}
            label="Новые объявления"
            wrapped
          />
          <Tab value="two" sx={{ color: "#9B9B9B" }} label="Лучщие предложение " />

        </Tabs>
      </Box>
      <Box sx={{display:"flex",boxSizing:'border-box',flexWrap:'wrap',gap:"100px"}}>
   {
    data.map((item)=>{
      return (
     <Link to={`/product/${item.id}`}>
        <Card sx={{width: "300px",display:"flex",direction:"column",alignItems:"center",height:"500px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250px"
              width="100%"
              image={item.image}
              alt="green iguana"
            />
            <CardContent sx={{textDecoration:"none"}}>
              <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"18px",marginBottom:"5px"}}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "5px" ,height:"100px",overflow:"hidden"}}>
               {item.description}
              </Typography>
              <Typography variant='p' sx={{ margin: "10px 0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
                <StarBorderPurple500Icon sx={{color:"yellow",fontSize:"25px",marginLeft:"13px"}}/>
               {item.rating.rate} 
              </Typography>
              <Typography variant='h5' sx={{ marginBottom: "5px",margin:"0 90px" }}>
                ${item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      )
    })
   }
    </Box>
      <Button variant="text" sx={{}}>Покозать еще
        <KeyboardArrowDownIcon />
      </Button>
    </>
  )
}