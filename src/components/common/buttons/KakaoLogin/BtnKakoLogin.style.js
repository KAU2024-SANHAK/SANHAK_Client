import styled from "styled-components";
import SvgIcKakaoLogin from "../../../../assets/svg/IcKakaoLogin";

export const ButtonWrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    border: none;
    background-color: transparent; 
    margin-top: 30rem;
`;

export const KakaoLoginButton = styled(SvgIcKakaoLogin)`
    display: flex;
`;