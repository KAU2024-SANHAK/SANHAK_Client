import styled from "styled-components";

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    position: relative;
    top: 20rem;
    border: none;
    background-color: transparent; 
`;