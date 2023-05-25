import axios from "axios"
// import { useEffect, useState } from "react"  
import { useParams } from "react-router-dom"
import React from "react"
import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material"

//Table

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs};
  }
  
  const rows = [
    createData('Количество комнат:', "Общая площадь:", "Этаж:"),
    createData('Этажность дома:', "Состояние квартиры: ","Этаж:32"),
    createData('Этажность дома:', "Год постройки/сдачи","Авторский проект"),
    createData('2 санузла и болееть дома:', "Меблирована","Высота потолков"),
   
  ];


//singleProduct

export function SingleHome() {
    const { id } = useParams()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setData(res.data);
            })
    }, [])
    console.log(data)
    return (
        <>
        <Container>
            <Toolbar>
                <Typography variant="p" sx={{color:"#787993",marginBottom:"20px"}}>
                Объявления   /   Ташкент Недвижимость   /   Ташкент Квартиры   /   Ташкент Продажа   /   Новостройки Ташкент
                </Typography>
             </Toolbar>
                <Typography variant="p" sx={{color:"#414D6A",fontSize:"34px"}}>
                Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже  <br /> юнусабад 5
                </Typography>
           
            <Box sx={{display:"flex"}}>
            <Toolbar sx={{marginTop:"30px",width:"50%"}}>
             <img src={data?.image} style={{width:"400px",height:"55%",marginBottom:"40px"}} />
             </Toolbar>
             <Box sx={{direction:"column",marginTop:"150px",width:"65%"}}>
                <Typography sx={{color:"#414D6A"}}>
                Артикул: 4418970   обновлено: 28.04.17 добавлено: 28.04.17 
                </Typography>
                <Typography variant="h1" sx={{fontSize:"40px",color:"#444444",margin:"20px 0"}}>
                {data.price}.y.e
                </Typography>
                <Typography sx={{color:"#4E72CA",fontSize:"14px",marginBottom:"12px"}}>
                Ташкент, Ташкентская область, Юнусабадский район 
                </Typography>
                <Button variant="contained" sx={{background:"#41D481",borderRadius:"19px",color:"#000",marginBottom:"10px"}}>
                99891 166 ****   Покозать польностю
                </Button>
              <Box sx={{marginBottom:"15px"}}>
              <Button variant="contained" sx={{background:"#41D481",borderRadius:"19px",color:"#000"}}>
                99891 166 **** Покозать польностю
                </Button>
              </Box>
                <Typography variant="p" sx={{marginBottom:"50px"}}>
                Автор обьявлении:  Зухриддин Темиров
                </Typography>
                <Toolbar style={{padding:"0",gap:"15px",marginTop:"15px"}}>
                <Button variant="contained" sx={{borderRadius:"24px",color:"#fff",padding:"16px 30px",background:"#304FFF"}}>
                Написать автору
                </Button>
                <Button variant="contained" sx={{borderRadius:"24px",color:"#fff",padding:"16px 30px",background:"#304FFF"}}>
                Предложить свою цену
                </Button>
                </Toolbar>
                <Toolbar>
                <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Toolbar>
                <Typography style={{textAlign:"center",margin:"20px 0",fontSize:"35px",color:"#D0021B"}}>
                    {data.title}
                </Typography>
                <Toolbar sx={{color:"#414D6A",fontSize:"23px",letterSpacing :"-3.85217e-05px",lineHeight:"35px",marginBottom:"50px"}}>
                   {data.description}
                </Toolbar>
             </Box>
            </Box>
        </Container>
        </>
    )
}