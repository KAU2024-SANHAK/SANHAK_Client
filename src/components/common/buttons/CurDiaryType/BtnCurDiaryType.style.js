import styled from "styled-components";

export const ButtonWrapper=styled.button`
    ${({ theme }) => theme.fonts.body_01};
    background-color: rgba(255, 255, 255, 0.50);
    position: relative;
    width: 32rem;
    height: 5.2rem;
    border-radius: 2.5rem;
    border: none;

    color: ${({ theme }) => theme.colors.normal.black};    
    text-align: left;
    padding-left: 3rem;
    font-weight: 400;
    letter-spacing: -0.0408rem;
`