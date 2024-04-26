import styled from "styled-components";
import { IcStartButton } from "../../../../assets/svg";

export const ButtonWrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    background-color: transparent;
`;

export const StartButton = styled(IcStartButton)`
    display: flex;
`;