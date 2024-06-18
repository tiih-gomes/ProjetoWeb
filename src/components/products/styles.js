import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    width: 20vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1vh;
    padding: 1rem;
    gap: 1vw;
`;

export const Image = styled.div`
    height: 20vh;
    width: 18vw;
    background: url(${(props) => props.$background}) center / cover no-repeat;
    border-radius: 1vh;
`;

export const Description = styled.div`
    text-align: center;
    max-width: 15vw;
`;