
import React from "react";
import { Box, Button, Container, Input, Slider, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import singleInput from "./Images/SingleInput.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function valuetext(value) {
    return `${value}°C`;
  }

export function AddProduct(){

    //Slider hook
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <Container>
         <Box sx={{margin:"20px 0"}}>
            
        <Button variant="text" sx={{padding:"12px 20px",color:"#787993"}} >
        <SearchIcon style={{marginRight:"15px"}}/>
        Введите название обявления или  выберите из списка</Button>
         </Box>
         <Box sx={{display:"flex",justifyContent:"space-around",marginBottom:"35px"}}>
            <Stack variant="p" sx={{padding:"4px 12px",color:"#704FFF",background:"#E5E3FF",borderRadius:"3px"}}>
            Интерсное
            </Stack>
            <Stack variant="p" sx={{padding:"4px 12px",color:"#57B4E2",background:"#E4F6FF",borderRadius:"3px"}}>
            Топ
            </Stack><Stack variant="p" sx={{padding:"4px 12px",color:"#47B95E",background:"#D2FFDB",borderRadius:"3px"}}>
            Отличные предложение
            </Stack><Stack variant="p" sx={{padding:"4px 12px",color:"#874C1A",background:"#F6DAC2",borderRadius:"3px"}}>
            Супер цена
            </Stack>
            <Stack variant="p" sx={{padding:"4px 12px",color:"#787993",background:"#D8D8D8",borderRadius:"3px"}}>
            г.Ташкент 
            </Stack>
            <Stack variant="p" sx={{padding:"4px 12px",color:"#787993",background:"#D8D8D8",borderRadius:"3px"}}>
            г.Термез 
            </Stack> <Stack variant="p" sx={{padding:"4px 12px",color:"#787993",background:"#D8D8D8",borderRadius:"3px"}}>
            г.Самарканд 
            </Stack>
         </Box>
         <Box sx={{display:"flex",gap:"25px" ,justifyContent:"space-between",alignContent:"center",marginBottom:"25px"}}>
        <Typography sx={{color:"#787993",fontSize:"18px"}}>Вы сейчас в рубрике</Typography>
       <Box sx={{ width: 800 }}>
     <img src={singleInput} />
    </Box>
       </Box>

       <Box sx={{display:"flex",gap:"25px" ,justifyContent:"space-between",margin:"25px 0"}}>
        <Typography sx={{color:"#787993",fontSize:"18px"}}>Выберите цену от и до</Typography>
       <Box sx={{ width: 800 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
       </Box>

       <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Typography>
        Состояние
            <KeyboardArrowDownIcon style={{marginLeft:"20px"}}/>
        </Typography>
        <Typography>
        Тип объявщика
            <KeyboardArrowDownIcon style={{marginLeft:"20px"}}/>
        </Typography>
        <Typography>
        Ташкент Мирза улугбекский район
            <KeyboardArrowDownIcon style={{marginLeft:"20px"}}/>
        </Typography>
        <Button variant="contained">Применить</Button>
       </Box>
        </Container>
    )
}