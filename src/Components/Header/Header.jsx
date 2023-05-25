import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, } from "@mui/material";
import img from "./images/Group 3.svg"
import pic from "./images/Group 14.png"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
// const pages = ["Объявления" ," Магазины " ,"  Для бизнеса"  , " Помощь"];


export function Header() {
  const selector = useSelector(state => state.lang.option)

  console.log(selector.token)

  const handleCloseNavMenu = () => {

  };


  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#000", padding: "15px 0", margin: 0, maxWidth: "100%" }}>
      <Container sx={{ padding: 0 }} >
        <Toolbar disableGutters>
          <img src={img} sx={{ width: "67px", height: "67px" }} />
          <Typography


            component="a"
            href="/"
            sx={{
              mr: 1,
              fontFamily: 'monospace',
              maxWidth: "138px",
              fontSize: 10,
              marginLeft: 1,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Продай, найди, купи
            все что пожелаешь…
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"

              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}

              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/products'>
                  <Typography textAlign="center">Объявления</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Магазины</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Для бизнеса  </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textDecoration: "none", listStyleType: "none" }} textAlign="center">  Помощь</Typography>
              </MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link style={{ textDecoration: "none" }} to='/products'>
              <Button

                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: '#000', display: 'block', fontWeight: "100",
                  fontSize: "15px",
                  lineHeight: " 18px"
                }}
              >
                Объявления
              </Button></Link>
            <Link style={{ textDecoration: "none" }} to='/add'>
              <Button

                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: '#000', display: 'block', fontWeight: "100",
                  fontSize: "15px",
                  lineHeight: " 18px",
                  textDecoration: "none"
                }}
              >
                Магазины
              </Button></Link>
            <Link style={{ textDecoration: "none" }} >
              <Button

                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: '#000', display: 'block', fontWeight: "100",
                  fontSize: "15px",
                  lineHeight: " 18px"
                }}
              >
                Для бизнеса
              </Button></Link>
            <Link style={{ textDecoration: "none" }} >
              <Button

                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: '#000', display: 'block', fontWeight: "100",
                  fontSize: "15px",
                  lineHeight: " 18px"
                }}
              >
                Помощь
              </Button></Link>


          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Button sx={{ paddingLeft: 0, margin: 0, color: "#4A4A4A" }}>Рус</Button>
            <Button sx={{ paddingLeft: 0, margin: 0, color: "#4A4A4A" }} >O’z</Button>


          </Box>
          <Box>
            {
              selector.token == undefined ? <>
                <Link to='/login'>
                  <Button sx={{ paddingLeft: 0, margin: 0, color: "#4E72CA" }}>Вход</Button> </Link>
                <Button sx={{ paddingLeft: 0, margin: 0, color: "#4E72CA" }} >Регистрация</Button>
              </> :
                <>
                  <Link to='profle'>
                    <Button sx={{ paddingLeft: 0, margin: 0, color: "#4E72CA" }}>
                    
                    </Button>
                    <Tooltip title="Logout">
                      <IconButton>
                      <img
                        style={{ width: '30px', height: '30px' }}
                        src='https://media.istockphoto.com/id/1317551883/vector/account-avatar-member-person-profle-user-icon-eps-vector.jpg?s=612x612&w=0&k=20&c=eI4Gk3O_dTbEPkq6pXG4ScrgsDehBsI9xUNbZAYOuww=' />
                      </IconButton>
                    </Tooltip>
                    <Button sx={{ paddingLeft: 0, margin: 0, color: "#4E72CA", }} >Profile</Button>
                  </Link>
                </>
            }
          </Box>
        </Toolbar>
        <Toolbar disableGutters >
          <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent="space-between" spacing={15}>

            <img style={{ maxWidth: "780px", }} src={pic} />
            <Link to='/add'>
              <Button variant="contained" sx={{ borderRadius: "22px", color: "white", backgroundColor: "#19D476", paddingBottom: "4px", float: "right" }} startIcon={<AddIcon />}>
                Добавить обьявления
              </Button>
            </Link>

          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );


}