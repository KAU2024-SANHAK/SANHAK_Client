import styled from "styled-components";

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    
    border: none;
    background-color: transparent; 
`;