import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

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

export const OnBoardingBody = styled.body`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
    text-align: left;
    height: 67%;
`

export const OnBoardingFooter = styled.footer`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    bottom: 1rem;
`
export const OnBoardingImgWrapper = styled.img`
    height: 48rem;
`
export const BlankImage =styled(SvgIcBlank)`
    margin-bottom: 3rem;
    margin-top: 3rem;
`
export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2rem;
`