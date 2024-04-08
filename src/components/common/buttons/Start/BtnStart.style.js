import styled from "styled-components";
import SvgIcStartButton from "../../../../assets/svg/IcStartButton"

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    border: none;
    background-color: transparent;
`;

export const StartButton = styled(SvgIcStartButton)`
    display: flex;
`;