import styled from "styled-components";
import SvgIcStartButton from "../../../../assets/svg/IcStartButton"

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    border: none;
    background-color: transparent;
    margin-top: 30rem;
`;

export const StartButton = styled(SvgIcStartButton)`
    
`;