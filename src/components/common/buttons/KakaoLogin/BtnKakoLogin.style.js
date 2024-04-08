import styled from "styled-components";
import SvgIcKakaoLogin from "../../../../assets/svg/IcKakaoLogin";

export const Wrapper = styled.button`   
    ${({ theme: { mixin } }) => mixin.flexCenter({})}  
    position: relative;
    top: 20rem;
    border: none;
    background-color: transparent; 
`;

export const KakaoLoginButton = styled(SvgIcKakaoLogin)`

`;