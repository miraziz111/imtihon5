import { Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import group from "./Images/Group.png"
import group2 from "./Images/Rectangle 26.png"
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {tokin} from '../../redux/redusers/login'
import { useNavigate } from "react-router-dom";

export function UserAutorizition() {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const navgate=useNavigate();
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setData({ ...data, [name]: value });
    };
    const login = () => {
        axios.post('https://reqres.in/api/login', data)
            .then(res => {
                dispatch(tokin(res.data))
                navgate('/')
            })
            .catch(err => { 
                console.log(err)
                alert("Email yoki password xato")
             });
    }
    return (
        <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: "50px" }}>
                <Box>
                    <Typography variant="h1" sx={{ fontSize: "40px", lineHeight: "46px", textAlign: "center", marginBottom: "30px", marginTop: "50px" }}>
                        Логин
                    </Typography>

                    <Box>
                        <Typography sx={{ fontSize: "20px", marginBottom: "10px " }}>
                            Введите email или номер телефона
                        </Typography>
                        <input name='email' onChange={(e) => handleChange(e)} placeholder="Emailingizni kiriting" style={{ padding: "15px 35px", fontSize: "25px", borderRadius: "5px", marginBottom: "50px" }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "20px", marginBottom: "10px " }}>
                            Пароль
                        </Typography>
                        <input style={{ padding: "15px 35px", fontSize: "25px", borderRadius: "5px" }} name='password' onChange={(e) => handleChange(e)} placeholder="Parolingizni kiriting" />
                    </Box>
                    <Button onClick={login} variant="contained" sx={{ background: "#41D481", padding: "15px 145px", marginTop: "30px", marginLeft: "15px" }}>Войти</Button>
                    <Typography sx={{ color: "#4E72CA", fontSize: "16px", marginTop: "60px", marginLeft: "40px" }}>
                        Восстоновить ваше пароль
                    </Typography>
                </Box>
                <Stack sx={{ marginTop: "20px" }} >
                    <img src={group2} />

                </Stack>
            </Toolbar>
        </Container>
    )
}