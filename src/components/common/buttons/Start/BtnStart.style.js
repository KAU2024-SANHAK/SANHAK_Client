import styled from "styled-components";
import { IcStartButton } from "../../../../assets/svg";

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    border: none;
    background-color: transparent;
`;

export const StartButton = styled(IcStartButton)`
    display: flex;
`;