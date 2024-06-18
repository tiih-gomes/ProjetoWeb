import React from "react";
import { HeaderContainer } from "./styles";
import { BiSolidCoffee } from "react-icons/bi";

export default function Header(){
    return(
        <HeaderContainer>
            <BiSolidCoffee />
            <h1>Fatecoffee</h1>
        </HeaderContainer>
    );
}