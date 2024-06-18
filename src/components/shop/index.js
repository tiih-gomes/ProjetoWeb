import React from "react";
import { Container, ShopContainer } from "./styles";
import { BiSolidCoffee } from "react-icons/bi";

export default function Shop({visible, setVisible}){
    return(
        <Container $visible={visible}>
           <ShopContainer>
                <BiSolidCoffee />
                <h1>Seu pedido foi efetuado!</h1>
                <button onClick={() => setVisible(false)}>Obrigado!</button>
           </ShopContainer>
        </Container>
    );
}