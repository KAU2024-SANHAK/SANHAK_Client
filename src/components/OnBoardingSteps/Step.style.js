import styled from "styled-components";

export const OnBoardingStepWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100%;
`
export const OnBoardingHeader = styled.header`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'center',align: 'center' })};
    position: absolute;
    top: 5rem;
    width: 100%;
`
export const OnBoardingBody = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
    text-align: left;
    height: 68%;
`
export const OnBoardingFooter = styled.footer`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    bottom: 1rem;
    margin-top: 10rem;
`
export const OnBoardingTitleWrapper = styled.div`
    position: absolute;
    top: 6.5rem;
`
export const OnBoardingImgWrapper = styled.div`
    height: 34%;
`
export const OnBoardingImg = styled.img`

`
export const OnBoardingHoneyBearWrapper = styled.div`
    margin-left: 1rem;
    height: 57%;
`

export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2rem;
`