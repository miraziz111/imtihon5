import { Container } from "@mui/material";
import { SingleHome } from "../Components/SingleHome/SingleHome";
import { SingleProductItem } from "../Components/SingleProductItem";

export function SingleProduct(){
  return(
    <Container>
    <SingleHome/>
    <SingleProductItem/>
    </Container>
  )
}