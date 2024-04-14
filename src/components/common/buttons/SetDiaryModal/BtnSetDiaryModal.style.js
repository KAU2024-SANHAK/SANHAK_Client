import styled from "styled-components";

export const ButtonWrapper=styled.button`
    ${({ theme }) => theme.fonts.body_01};
    position: relative;
    fill: rgba(255, 255, 255, 0.50);
    width: 32rem;
    height: 5.2rem;
    border-radius: 2.5rem;

    font-weight: 400;
`