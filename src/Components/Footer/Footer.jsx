import { Box, Button, Container, Link, Stack, Toolbar, Typography } from "@mui/material";
import footerLogo from "./Images/footerLogo.svg"
import playstore from "./Images/playstore.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Footer(){
    return(
        <Container >
           <Box sx={{backgroundColor:"#33383C"}}> 
            <Toolbar sx={{padding:"30px",marginTop:"20px",backgroundColor:"#282B30"}}>
                <Stack  direction="row" alignItems="center" justifyContent="space-between" gap="95px">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
                <img src={footerLogo} />
                <Typography variant="p" sx={{color:"white",opacity:"0.1" ,maxWidth:"153px"}}>
                Продай, найди, купи 
               все что ты пожелаешь 
                </Typography>
                </Box>
                <Typography variant="p" sx={{maxWidth:"307px", color: "#98A4B7"}}>
                Веб сайт бесплатных обьявлений | на базе 
                имеется 234 944 999 шт обяления
                </Typography>
                <img src={playstore} style={{float:"right",right:"0"}}/>

                </Stack>
            </Toolbar>
            <Toolbar style={{display:"flex",maxWidth:"100%",justifyContent:"space-between"}} >
            <Toolbar sx={{paddingTop:"50px",flexDirection:"column"}}>
                <Stack flexDirection="column" color="#878F99" marginBottom="20px">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Автомобили
                    </Typography>
                    <p style={{margin:"4px 0"}} > Легковые авто</p>
                    <p style={{margin:"4px 0"}}>Мото</p>
                    <p style={{margin:"4px 0"}}>Автобусы</p>
                    <p style={{margin:"4px 0"}}> Грузовые авто</p>
                    <p style={{margin:"4px 0"}}>Сельхозтехника</p>
                    <p style={{margin:"4px 0"}}>Запчасти и Аксессуары</p>
                    <p style={{margin:"4px 0"}}>Прицепы и Спецтехника</p>
                    <p style={{margin:"4px 0"}}> Водный и Другой транспортa</p>
                        
                </Stack>
                <Stack flexDirection="column" color="#878F99">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Дом и Сад
                    </Typography>
                    <p style={{margin:"4px 0"}} > Товары для интерьера</p>
                    <p style={{margin:"4px 0"}}> Товары для сада</p>
                    <p style={{margin:"4px 0"}}> Растения</p>
                    <p style={{margin:"4px 0"}}>Продукты питания</p>
                    <p style={{margin:"4px 0"}}>Посуда и Кухонная утварь</p>
                    <p style={{margin:"4px 0"}}> Хоз.инвентарь и Бытовая химия</p>
                    <p style={{margin:"4px 0"}}>Канцтовары и Расходные </p>
                    <p style={{margin:"4px 0"}}>Прочие товары для дома</p>
                        
                </Stack>
            </Toolbar>
            <Toolbar sx={{backgroundColor:"#33383C",paddingTop:"50px",flexDirection:"column"}}>
                <Stack flexDirection="column" color="#878F99" marginBottom="20px">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Недвижимость
                    </Typography>
                    <p style={{margin:"4px 0"}} > Легковые авто</p>
                    <p style={{margin:"4px 0"}}>Мото</p>
                    <p style={{margin:"4px 0"}}>Автобусы</p>
                    <p style={{margin:"4px 0"}}> Грузовые авто</p>
                    <p style={{margin:"4px 0"}}>Сельхозтехника</p>
                    <p style={{margin:"4px 0"}}>Запчасти и Аксессуары</p>
                    <p style={{margin:"4px 0"}}>Прицепы и Спецтехника</p>
                    <p style={{margin:"4px 0"}}> Водный и Другой транспортa</p>
                        
                </Stack>
                <Stack flexDirection="column" color="#878F99">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Товары стройки и ремонта
                    </Typography>
                    <p style={{margin:"4px 0"}} > Товары для интерьера</p>
                    <p style={{margin:"4px 0"}}> Товары для сада</p>
                    <p style={{margin:"4px 0"}}> Растения</p>
                    <p style={{margin:"4px 0"}}>Продукты питания</p>
                    <p style={{margin:"4px 0"}}>Посуда и Кухонная утварь</p>
                    <p style={{margin:"4px 0"}}> Хоз.инвентарь и Бытовая химия</p>
                    <p style={{margin:"4px 0"}}>Канцтовары и Расходные </p>
                    <p style={{margin:"4px 0"}}>Прочие товары для дома</p>
                        
                </Stack>
            </Toolbar>
            <Toolbar sx={{backgroundColor:"#33383C",paddingTop:"50px",flexDirection:"column"}}>
                <Stack flexDirection="column" color="#878F99" marginBottom="20px">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Электроника
                    </Typography>
                    <p style={{margin:"4px 0"}} > Легковые авто</p>
                    <p style={{margin:"4px 0"}}>Мото</p>
                    <p style={{margin:"4px 0"}}>Автобусы</p>
                    <p style={{margin:"4px 0"}}> Грузовые авто</p>
                    <p style={{margin:"4px 0"}}>Сельхозтехника</p>
                    <p style={{margin:"4px 0"}}>Запчасти и Аксессуары</p>
                    <p style={{margin:"4px 0"}}>Прицепы и Спецтехника</p>
                    <p style={{margin:"4px 0"}}> Водный и Другой транспортa</p>
                        
                </Stack>
                <Stack flexDirection="column" color="#878F99">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Хобби, Отдых и Спорт
                    </Typography>
                    <p style={{margin:"4px 0"}} > Товары для интерьера</p>
                    <p style={{margin:"4px 0"}}> Товары для сада</p>
                    <p style={{margin:"4px 0"}}> Растения</p>
                    <p style={{margin:"4px 0"}}>Продукты питания</p>
                    <p style={{margin:"4px 0"}}>Посуда и Кухонная утварь</p>
                    <p style={{margin:"4px 0"}}> Хоз.инвентарь и Бытовая химия</p>
                    <p style={{margin:"4px 0"}}>Канцтовары и Расходные </p>
                    <p style={{margin:"4px 0"}}>Прочие товары для дома</p>
                        
                </Stack>
            </Toolbar>
            <Toolbar sx={{backgroundColor:"#33383C",paddingTop:"50px",flexDirection:"column"}}>
                <Stack flexDirection="column" color="#878F99" marginBottom="20px">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Личные вещи
                    </Typography>
                    <p style={{margin:"4px 0"}} > Легковые авто</p>
                    <p style={{margin:"4px 0"}}>Мото</p>
                    <p style={{margin:"4px 0"}}>Автобусы</p>
                    <p style={{margin:"4px 0"}}> Грузовые авто</p>
                    <p style={{margin:"4px 0"}}>Сельхозтехника</p>
                    <p style={{margin:"4px 0"}}>Запчасти и Аксессуары</p>
                    <p style={{margin:"4px 0"}}>Прицепы и Спецтехника</p>
                    <p style={{margin:"4px 0"}}> Водный и Другой транспортa</p>
                        
                </Stack>
                <Stack flexDirection="column" color="#878F99">
                    <Typography sx={{alignItems:"center",flexDirection:"column",color:"white"}}>
                   <ChevronRightIcon sx={{marginRight:"15px",alignItems:"center",textAlign:"center",color:"green"}}/>
                   Бизнес и услуги
                    </Typography>
                    <p style={{margin:"4px 0"}} > Товары для интерьера</p>
                    <p style={{margin:"4px 0"}}> Товары для сада</p>
                    <p style={{margin:"4px 0"}}> Растения</p>
                    <p style={{margin:"4px 0"}}>Продукты питания</p>
                    <p style={{margin:"4px 0"}}>Посуда и Кухонная утварь</p>
                    <p style={{margin:"4px 0"}}> Хоз.инвентарь и Бытовая химия</p>
                    <p style={{margin:"4px 0"}}>Канцтовары и Расходные </p>
                    <p style={{margin:"4px 0"}}>Прочие товары для дома</p>
                        
                </Stack>
            </Toolbar>
            
           
            </Toolbar>
            <Button variant="text" sx={{marginTop:"15px",color:"#66717A",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"400px"}} >
                Покозать еще 
                <KeyboardArrowDownIcon sx={{color:"#66717A"}}/>
                </Button>
              <hr />
                <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
                <Link  sx={{color:"#05F3B3",textDecoration:"none"}} href="#"> Подать объявление  </Link>
                <Link  sx={{color:"#66717A",textDecoration:"none"}} href="#">Объявления</Link>
                <Link  sx={{color:"#66717A",textDecoration:"none"}} href="#">Магазины</Link>
                <Link  sx={{color:"#66717A",textDecoration:"none"}} href="#">Помощь</Link>
                <Link  sx={{color:"#66717A",textDecoration:"none"}} href="#">Безопасность</Link>
                <Link  sx={{color:"#66717A",textDecoration:"none"}} href="#">Реклама на сайте </Link>

            
                </Toolbar>
           
           </Box>
        </Container>
    )
}