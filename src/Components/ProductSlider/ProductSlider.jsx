import { Box, Button, Container, Stack, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import Bag from "./Images/Bag.png"
import Kompyuter from "./Images/Kompyuter.png"
import Kreslo from "./Images/Kreslo.png"
import Bitmap1 from "./Images/Bitmap1.png"
import Bitmap2 from "./Images/Bitmap2.png"
import Bitmap3 from "./Images/Bitmap3.png"
import Bitmap4 from "./Images/Bitmap4.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export function ProductSlider(){
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <Container style={{padding:0}}>
            <Toolbar style={{ backgroundColor:"rgba(182, 202, 251, 0.159986) ",paddingTop:"50px",paddingBottom:"50px",marginBottom:"30px"}}>
                <Stack  justifyContent="space-between" direction="row" alignItems="center"  spacing={4}
>
                   <img src={Bag} /> 
                   <img src={Kompyuter} /> 
                   <img src={Kreslo} /> 
                </Stack>
            </Toolbar>
            <Toolbar style={{flexDirection:"column",justifyContent:"flex-start"}}>
          <Box sx={{marginBottom:"15px",color:" #9B9B9B"}}>
          <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Просмотренные"
          wrapped
          sx={{fontSize:"15px"}}
        />
        <Tab value="two" label="Выбор редакции" />
        <Tab value="three" label="Сниженные цены" />
      </Tabs>
          </Box>
     
                <Stack justifyContent="space-between" direction="row" alignItems="center"  spacing={4}>
                   <img src={Bitmap1} /> 
                   <img src={Bitmap2} /> 
                   <img src={Bitmap3} /> 
                   <img src={Bitmap4} /> 
                </Stack>
            <Button variant="text" sx={{marginTop:"15px"}} >
                Покозать еще 
                <KeyboardArrowDownIcon/>
                </Button>
            </Toolbar>

        </Container>
    )
}