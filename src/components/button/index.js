import React, { useState } from "react";
import { Container } from "./styles";
import Shop from "../shop";

export default function Button(){
    const [visible, setVisible] = useState(false);

    const handleButtonClick = () => {
        setVisible(true);
    }

    return(
        <Container>
           <button onClick={handleButtonClick}>COMPRAR</button>
            {visible && <Shop visible={visible} setVisible={setVisible}/>}
        </Container>
    );
}