import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import Plane from "./Images/Airplane.svg"
import Store from "./Images/Store.svg"
import Terminal from "./Images/Terminal.svg"
import Shape from "./Images/Shape.png"
import Shape2 from "./Images/Shape2.png"
import Shape3 from "./Images/Shape3.png"
import Maintenance from "./Images/In Maintenance.svg"
import Shape4 from "./Images/Shape4.png"
import Man from "./Images/Man.svg"

export function Intro(){
    return(
        <Container disableGutters>
         <Toolbar sx={{marginTop:"50px",padding:0,display:"flex",gap:"36px" ,justifyContent:"space-evenly"}}>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Plane} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Автомобили
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Store} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Недвижимость
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Terminal} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Электроника
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Shape} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Работа
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Shape2} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Личные вещи
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Shape3} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Стройка и ремонт
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Maintenance} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Стройка и ремонт
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Shape4} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Хобби и Спорт
       </Typography>
         </Stack>
         <Stack   direction="column"
          alignItems="center"
          spacing={2}>
         <img src={Man} style={{padding:"12px",background: "#B6CAFB",borderRadius: "20px"}} />
       <Typography variant="p" sx={{color: "#4A4A4A",fontSize:" 14px",lineHeight:"16px"}}>
       Бизнес и услуги
       </Typography>
         </Stack>
         
         </Toolbar>
         </Container>
    )
}