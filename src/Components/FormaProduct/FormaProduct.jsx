import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import photo from "./Images/Group 21.png"
import map from "./Images/Screen Shot 2018-07-18 at 3.20.24 AM.png"
import { Link } from "react-router-dom";


//Login page

export function FormaProduct() {
    return (
        <Container>
            <Box sx={{ marginLeft: "250px" }}>
                <p >Цена</p>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>400 000</p>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>Сум</p>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon />
                        Договорная
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ width: "30%" }}>Количество комнат*</p>
                    <p style={{ width: "30%" }}>Общая площадь* м²</p>
                    <p style={{ width: "30%" }}>Жилая площадьм²</p>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ textDecoration: "underline", width: "30%", marginBottom: "15px" }}>4</p>
                    <p style={{ textDecoration: "underline", width: "30%" }}>900</p>
                    <p style={{ textDecoration: "underline", width: "30%" }}>90</p>
                </Box>
                <p>Расположение*</p>

                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В городе
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Вдоль трассы
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Возле водоема, реки
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        На закрытой территории
                    </Box>
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В сельской местности
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Не достроен
                    </Box>

                </Box>

                <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <p style={{ width: "30%" }}>Количество комнат*</p>
                        <p style={{ width: "30%" }}>Высота потолков</p>
                        <p style={{ width: "30%" }}>Площадь участка*</p>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%", marginBottom: "15px" }}>4</p>
                        <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>2</p>
                        <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>342</p>
                    </Box>
                </Box>
                <p>Расположение*</p>

                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В городе
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Вдоль трассы
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Возле водоема, реки
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        На закрытой территории
                    </Box>
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В сельской местности
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Не достроен
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ width: "30%", margin: 0 }}>Количество комнат*</p>
                    <p style={{ width: "30%", margin: 0 }}>Высота потолков</p>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>Коттедж</p>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>Есть возможность подключения</p>

                </Box>
                <p>Расположение*</p>

                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В городе
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Вдоль трассы
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В дачном массиве
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Возле водоема, реки
                    </Box>
                    
                </Box>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        В сельской местности
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                        <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
                        Не достроен
                    </Box>
                </Box>
                <p>Электричество*</p> 
                <h3 style={{marginBottom:"60px"}}>Есть возможность подключения</h3>
                <hr />
                <Box>
                    <p style={{color:"#000",opacity:"0.55"}}>9000 знаков осталос</p>
                    <Box sx={{gap:"55px",display:"flex",flexWrap:"wrap",margin:"35px 0"}}>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    <img src={photo}/>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{marginBottom:"20px"}}>
                        Местоположение объекта
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ width: "30%", margin: 0 }}>Регион</p>
                    <p style={{ width: "30%", margin: 0 }}>Город / Район</p>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>Ташкент</p>
                    <p style={{ fontSize: "19px", textDecoration: "underline", width: "30%" }}>Мирза Улугбекский район</p>

                </Box>
                <img src={map} />
                    </Box>
                    <Box>
                        <Box>
                            <p style={{fontSize:"14px",lineHeight:"16px"}}>Телефонный номер</p>
                            <h5 style={{margin:"0 0 10px" ,fontSize:"19px",lineHeight:"22px"}}>+99894 888 74452</h5>
                            <hr style={{width:"300px",margin:0}}/>
                        </Box>
                        <Box>
                            <p style={{fontSize:"14px",lineHeight:"16px"}}>Email-адрес</p>
                            <h5 style={{margin:"0 0 10px" ,fontSize:"19px",lineHeight:"22px"}}>+99894 888 74452</h5>
                            <hr style={{width:"300px",margin:0}}/>
                        </Box>
                        <Box>
                            <p style={{fontSize:"14px",lineHeight:"16px"}}>Контактный лицо </p>
                            <h5 style={{margin:"0 0 10px" ,fontSize:"19px",lineHeight:"22px"}}>Зухриддин</h5>
                            <hr style={{width:"300px",margin:0}}/>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",marginTop:"25px",gap:"50px"}}>
                            <Button sx={{background:"#19D476",padding:"20px 45px",color:"#000",lineHeight:"22px" ,fontSize:"19px"}}>
                            Добавить обьявления бесплатно
                            </Button>
                            <Link style={{color:"#4E72CA",lineHeight:"22px" ,fontSize:"19px"}}>Предпросмотр</Link>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}