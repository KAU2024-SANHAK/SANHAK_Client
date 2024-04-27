import styled from "styled-components";

export const MyPagePopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const MyPagePopUpBodyWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: relative;
    height: 26rem;
`
export const TextWrapper = styled.p`
    ${({ theme }) => theme.fonts.heading_03};
    position: relative;
    width: 32rem;
    margin-top: 5rem;
    padding-left: 3.3rem;
    padding-bottom: 0.4rem;

    letter-spacing: -0.0408rem;
`
