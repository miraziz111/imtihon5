import { Container } from "@mui/material";
import { AddProduct } from "../Components/AddProduct/AddProduct";
import { AddMenuProduct } from "../Components/AddMenuProduct/AddMenuProduct";
import { AddWrapper } from "../Components/AddWrapper";

export function NewAddProduct(){
    return(
        <Container>
            <AddProduct/>
            <AddMenuProduct/>
            <AddWrapper/>
        </Container>
    )
}