import styled from "styled-components";

export const Container = styled.div`
    ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    `}
`;

export const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 1vh;
    width: 15vw;
    height: 40vh;

    svg {
        font-size: 5vw;
    }

    h1 {
        max-width: 12vw;
    }

    button {
        height: 5vh;
        width: 8vw;
        background-color: #3e90f8;
        cursor: pointer;
    }
`; 