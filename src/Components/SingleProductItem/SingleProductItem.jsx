
import React from "react";
import { Box, CardContent, Stack, Tab, Tabs, Typography } from "@mui/material";
import singlepro1 from "./Images/singlepro1.png"
import singlepro2 from "./Images/singlepro2.png"
import singlepro3 from "./Images/singlepro3.png"
import singlepro4 from "./Images/singlepro4.png"

export function SingleProductItem(){

    //Slider card 

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <>
         <Box sx={{marginBottom:"15px",color:" #9B9B9B"}}>
          <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Похожие объявления"
          wrapped
          sx={{fontSize:"15px"}}
        />
        <Tab value="two" label="Обьявление автора" />
        
      </Tabs>
          </Box>
     
                <Stack justifyContent="space-between" direction="row" alignItems="center"  spacing={4}>
                  <Stack>
                  <img src={singlepro1} style={{borderRadius:"5px"}}/> 
                   <CardContent sx={{textDecoration:"none"}}>
              
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "5px" ,height:"50px",overflow:"hidden"}}>
              Овощная компания. Доставка свежих овощей и фруктов
              </Typography>
              <Typography variant='p' sx={{ margin: "10px 0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
              Вчера 22:55
              </Typography>
              <Typography variant='h5' sx={{ marginBottom: "5px"}}>
              39 000 000 сум
              </Typography>
            </CardContent>
                  </Stack>
                  <Stack>
                  <img src={singlepro2} style={{borderRadius:"5px"}}/> 
                   <CardContent sx={{textDecoration:"none"}}>
              
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "5px" ,height:"50px",overflow:"hidden"}}>
              Овощная компания. Доставка свежих овощей и фруктов
              </Typography>
              <Typography variant='p' sx={{ margin: "10px 0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
              Вчера 22:55
              </Typography>
              <Typography variant='h5' sx={{ marginBottom: "5px"}}>
              39 000 000 сум
              </Typography>
            </CardContent>
                  </Stack>
                  <Stack>
                  <img src={singlepro3} style={{borderRadius:"5px"}}/> 
                   <CardContent sx={{textDecoration:"none"}}>
              
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "5px" ,height:"50px",overflow:"hidden",fontWeight:"bolt"}}>
              Овощная компания. Доставка свежих овощей и фруктов
              </Typography>
              <Typography variant='p' sx={{ margin: "10px auto",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
              Вчера 22:55
              </Typography>
              <Typography variant='h5' sx={{ margin: "5px"}}>
              39 000 000 сум
              </Typography>
            </CardContent>
                  </Stack>
                  <Stack>
                  <img src={singlepro4} style={{borderRadius:"5px"}}/> 
                   <CardContent sx={{textDecoration:"none"}}>
              
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "5px" ,height:"50px",overflow:"hidden"}}>
              Овощная компания. Доставка свежих овощей и фруктов
              </Typography>
              <Typography variant='p' sx={{ margin: "10px 0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
              Вчера 22:55
              </Typography>
              <Typography variant='h5' sx={{ marginBottom: "5px"}}>
              39 000 000 сум
              </Typography>
            </CardContent>
                  </Stack>
                   
                  
                 
                </Stack>
        </>
    )
}