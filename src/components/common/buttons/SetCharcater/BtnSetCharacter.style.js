import styled from "styled-components";

export const ButtonWrapper=styled.button`
    background-color: ${({ theme }) => theme.colors.pink.btn_hover_pink};
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 7.1rem;
    border-radius: 3rem;
    border: none;


`