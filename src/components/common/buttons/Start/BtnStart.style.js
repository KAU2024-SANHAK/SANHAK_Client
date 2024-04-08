import styled from "styled-components";
import SvgIcStartButton from "../../../../assets/svg/IcStartButton"

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    position: relative;
    top: 20rem;
    border: none;
    background-color: transparent; 
`;

export const StartButton = styled(SvgIcStartButton)`

`;