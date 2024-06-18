import React from "react";
import Header from "../../components/header";
import { Container, ProductList } from "./styles";
import Product from "../../components/products";
import espresso from "../../assets/images/1.png";
import cappuccino from "../../assets/images/2.png";
import latte from "../../assets/images/3.png";
import americano from "../../assets/images/4.png";

export default function Home(){
    return(
        <Container>
            <Header />
            <ProductList>
                <Product background={espresso}
                    title="Espresso"
                    description="Café forte, feito com alta pressão, base para outras bebidas."
                />
                <Product background={cappuccino}
                    title="Cappuccino"
                    description="Espresso com leite vaporizado e espuma de leite."
                />
                <Product background={latte}
                    title="Latte"
                    description="Espresso com bastante leite vaporizado e um pouco de espuma."
                />
                <Product background={americano}
                    title="Americano"
                    description="Espresso diluído com água quente, resultando em café suave."
                />
            </ProductList>
        </Container>
    );
}