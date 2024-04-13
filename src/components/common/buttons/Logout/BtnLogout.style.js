import styled from "styled-components";

export const ButtonWrapper=styled.button`
    background-color: ${({ theme }) => theme.colors.pink.background_pink};
    ${({ theme }) => theme.fonts.body_01};
    width: 20rem;
    height: 5.2rem;
    border-radius: 3rem;
    border: none;

    position: absolute;
    bottom:  4.2rem;
`