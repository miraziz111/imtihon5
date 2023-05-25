import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Konki from "./Images/Konki.png"
import KFC from "./Images/KFC.png"
import KD from "./Images/KD.png"

export function AddWrapper() {
    return (
        <Container>
            <Box sx={{ margin: "40px 0" }}>
                <hr />
                <Typography sx={{ color: "#414D6A", fontSize: "20px" }}>
                    <SearchIcon sx={{ fontSize: "25px", marginRight: "10px" }} />
                    СЕЙЧАС ИЩУТ
                </Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
                <Box sx={{ margin: "40px 0" }}>
                    <Typography sx={{ marginBottom: "10px", color: "#4E72CA", fontSize: "16px", lineHeight: "24px" }}>
                        купить Мясная продукци
                    </Typography>
                    <Typography sx={{ color: "#AAAAB6", fontSize: "20px" }}>
                        <SearchIcon sx={{ color: "#AAAAB6", fontSize: "25px", marginRight: "10px" }} />
                        2 часа назад
                    </Typography>
                </Box>
                <Box sx={{ margin: "40px 0" }}>
                    <Typography sx={{ marginBottom: "10px", color: "#4E72CA", fontSize: "16px", lineHeight: "24px" }}>
                        купить Мясная продукци
                    </Typography>
                    <Typography sx={{ color: "#AAAAB6", fontSize: "20px" }}>
                        <SearchIcon sx={{ color: "#AAAAB6", fontSize: "25px", marginRight: "10px" }} />
                        2 часа назад
                    </Typography>
                </Box>
                <Box sx={{ margin: "40px 0" }}>
                    <Typography sx={{ marginBottom: "10px", color: "#4E72CA", fontSize: "16px", lineHeight: "24px" }}>
                        купить Мясная продукци
                    </Typography>
                    <Typography sx={{ color: "#AAAAB6", fontSize: "20px" }}>
                        <SearchIcon sx={{ color: "#AAAAB6", fontSize: "25px", marginRight: "10px" }} />
                        2 часа назад
                    </Typography>
                </Box>
                <Box sx={{ margin: "40px 0" }}>
                    <Typography sx={{ marginBottom: "10px", color: "#4E72CA", fontSize: "16px", lineHeight: "24px" }}>
                        купить Мясная продукци
                    </Typography>
                    <Typography sx={{ color: "#AAAAB6", fontSize: "20px" }}>
                        <SearchIcon sx={{ color: "#AAAAB6", fontSize: "25px", marginRight: "10px" }} />
                        2 часа назад
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Typography variant="h2" sx={{color:"#41D481",fontSize:"20px",lineHeight:"23px",marginBottom:"20px"}}>
                САМОЕ ИНТЕРЕСНОЕ
                </Typography>
                <Box sx={{display:"flex", justifyContent:"space-between",gap:"20px"}}>
                <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2} padding={3} border={0.1}>
                    <img src={Konki} alt="dgf" />
                    <Typography variant="h3" sx={{maxWidth:"292px",fontSize:"16px"}}>
                    Коньки раздвижные Galaxy р-р 36-39
                    </Typography>
                    <Typography variant="p" sx={{}}>
                    Вчера 22:55
                    </Typography>
                    <Typography variant="h6">
                    39 000 000 сум
                    </Typography>
                </Stack>
                <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2} padding={3} border={1}>
                    <img src={KFC} alt="dgf" />
                    <Typography variant="h3" sx={{maxWidth:"292px",fontSize:"16px"}}>
                    Коньки раздвижные Galaxy р-р 36-39
                    </Typography>
                    <Typography variant="p" sx={{}}>
                    Вчера 22:55
                    </Typography>
                    <Typography variant="h6">
                    39 000 000 сум
                    </Typography>
                </Stack>
                <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2} padding={3} border={1}>
                    <img src={KD} alt="dgf" />
                    <Typography variant="h3" sx={{maxWidth:"292px",fontSize:"16px"}}>
                    Коньки раздвижные Galaxy р-р 36-39
                    </Typography>
                    <Typography variant="p" sx={{}}>
                    Вчера 22:55
                    </Typography>
                    <Typography variant="h6">
                    39 000 000 сум
                    </Typography>
                </Stack>
                </Box>
            </Box>

        </Container>
    )
}