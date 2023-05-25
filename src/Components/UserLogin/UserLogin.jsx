import { Box, Button, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { Margin } from "@mui/icons-material";
import img from "./Images/Oval 2 (1).png"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export function UserLogin() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Container>
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "300px", margin: "30px 0" }}>
                    <p sx={{ color: "#414D6A" }}>
                        Здравствуйте Зухриддин Темиров
                    </p>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "130px" }}>
                        <Typography sx={{ color: "#304FFF" }}>
                            Ваш счет: 2 3000 сум
                        </Typography>
                        <Button variant="contained" sx={{ display: "flex", alignItems: "center", ":hover": "none", padding: "0 10px", boxShadow: "none", color: "#000", justifyContent: "flex-start", overflow: "hidden", background: "#fff" }}>
                            <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", background: "#41D481", marginRight: "12px" }}>
                                <AddIcon sx={{ border: "none", marginTop: "13px" }} />
                            </Box>
                            Пополнить
                        </Button>
                    </Box>
                </Box>
                <hr />
            </Toolbar>
            <hr />
            <Toolbar>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                    >
                        <Tab
                            value="one"
                            label="Объявления"
                            wrapped
                            sx={{color:"#304FFF",fontSize:"17px",lineHeight:"20px"}}
                        />
                        <Tab value="two" sx={{color:"#414D6A",fontSize:"17px",lineHeight:"20px"}} label="Сообщения" />
                        <Tab value="three"sx={{color:"#414D6A",fontSize:"17px",lineHeight:"20px"}} label="  Платежи и счёт  " />
                        <Tab value="four"sx={{color:"#414D6A",fontSize:"17px",lineHeight:"20px"}} label="Настройки" />
                        <Tab value="five" sx={{color:"#414D6A",fontSize:"17px",lineHeight:"20px"}} label=" Мой бизнес" />
                    </Tabs>
                    
                </Box>
            </Toolbar>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
               <img src={img} /> 
               <p style={{margin:"0",color:"#414D6A"}}>Срочно нужен программист yii2</p>
               <Box>
                <p style={{margin:"0",color:"#414D6A",fontSize:"15px",lineHeight:"18px"}}>2 000 000</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>6 000 000 сум</p>
               </Box>
               <Box>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}># 345 002 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>С: 28 июнь </p>
                 <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>По: 28 июль</p>
               </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #41D481",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#41D481",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Поднять

                </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #304FFF",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#304FFF",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Рекламировать

                </Box>
            </Box>
                <hr />
                <Box sx={{display:"flex",gap:"40px"}}>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#304FFF"}}> Статистика </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}> Просмотры: 195</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>Тел.: 200 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>В Избранном: 0</p>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
               <img src={img} /> 
               <p style={{margin:"0",color:"#414D6A"}}>Срочно нужен программист yii2</p>
               <Box>
                <p style={{margin:"0",color:"#414D6A",fontSize:"15px",lineHeight:"18px"}}>2 000 000</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>6 000 000 сум</p>
               </Box>
               <Box>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}># 345 002 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>С: 28 июнь </p>
                 <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>По: 28 июль</p>
               </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #41D481",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#41D481",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Поднять

                </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #304FFF",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#304FFF",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Рекламировать

                </Box>
            </Box>
                <hr />
                <Box sx={{display:"flex",gap:"40px"}}>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#304FFF"}}> Статистика </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}> Просмотры: 195</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>Тел.: 200 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>В Избранном: 0</p>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
               <img src={img} /> 
               <p style={{margin:"0",color:"#414D6A"}}>Срочно нужен программист yii2</p>
               <Box>
                <p style={{margin:"0",color:"#414D6A",fontSize:"15px",lineHeight:"18px"}}>2 000 000</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>6 000 000 сум</p>
               </Box>
               <Box>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}># 345 002 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>С: 28 июнь </p>
                 <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>По: 28 июль</p>
               </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #41D481",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#41D481",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Поднять

                </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #304FFF",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#304FFF",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Рекламировать

                </Box>
            </Box>
                <hr />
                <Box sx={{display:"flex",gap:"40px"}}>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#304FFF"}}> Статистика </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}> Просмотры: 195</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>Тел.: 200 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>В Избранном: 0</p>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
               <img src={img} /> 
               <p style={{margin:"0",color:"#414D6A"}}>Срочно нужен программист yii2</p>
               <Box>
                <p style={{margin:"0",color:"#414D6A",fontSize:"15px",lineHeight:"18px"}}>2 000 000</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>6 000 000 сум</p>
               </Box>
               <Box>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}># 345 002 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>С: 28 июнь </p>
                 <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>По: 28 июль</p>
               </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #41D481",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#41D481",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Поднять

                </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #304FFF",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#304FFF",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Рекламировать

                </Box>
            </Box>
                <hr />
                <Box sx={{display:"flex",gap:"40px"}}>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#304FFF"}}> Статистика </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}> Просмотры: 195</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>Тел.: 200 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>В Избранном: 0</p>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
               <img src={img} /> 
               <p style={{margin:"0",color:"#414D6A"}}>Срочно нужен программист yii2</p>
               <Box>
                <p style={{margin:"0",color:"#414D6A",fontSize:"15px",lineHeight:"18px"}}>2 000 000</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>6 000 000 сум</p>
               </Box>
               <Box>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}># 345 002 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>С: 28 июнь </p>
                 <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>По: 28 июль</p>
               </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #41D481",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#41D481",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Поднять

                </Box>
                <Box sx={{display:"flex",alignItems:"center",border:"1px solid #304FFF",gap:"25px",padding:" 2px 10px"}}>
                <Box sx={{background:"#304FFF",borderRadius:"50%"}}>
                <ArrowUpwardIcon sx={{color:"white",border:"0px solid blue",margin:"0 5px "}}/>
                </Box>
                Рекламировать

                </Box>
            </Box>
                <hr />
                <Box sx={{display:"flex",gap:"40px",marginBottom:"80px"}}>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#304FFF"}}> Статистика </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}> Просмотры: 195</p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>Тел.: 200 </p>
                <p  style={{margin:"0",fontSize:"15px",lineHeight:"18px",color:"#414D6A"}}>В Избранном: 0</p>
                </Box>
                

         
        </Container>
    )
}