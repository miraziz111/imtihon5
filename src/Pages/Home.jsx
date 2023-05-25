import { Header } from '../Components/Header'
import { Intro } from '../Components/Intro'
import { MenuProduct } from '../Components/MenuProduct'
import { ProductSlider } from '../Components/ProductSlider'

import { Container } from '@mui/material'

export function Home() {
    return (
        <Container disableGutters>
            <Intro />
            <MenuProduct />
            <ProductSlider />
        </Container>
    )
}