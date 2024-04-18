import styled from "styled-components";

export const ButtonWrapper=styled.button`
    background-color: ${({ theme }) => theme.colors.pink.btn_hover_pink};
    ${({ theme }) => theme.fonts.heading_03};
    position: relative;
    width: 32rem;
    height: 7.1rem;
    border-radius: 3rem;
    border: none;

    margin-bottom: 6rem;
    margin-top: 4.9rem;
`