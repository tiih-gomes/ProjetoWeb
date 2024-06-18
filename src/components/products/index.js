import React from "react";
import { Container, Description, Image } from "./styles";
import Button from "../button";

export default function Product({background, title, description}){
    return(
        <Container>
            <Image $background={background}/>
            <Description>
                <h2>{title}</h2>
                <span>{description}</span>
            </Description>
            <Button />
        </Container>
    );
}