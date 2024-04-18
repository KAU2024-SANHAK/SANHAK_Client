import styled from "styled-components";
import { IcPopUpSlide } from '../../assets/svg/index'

export const PopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    width: 37.5rem;
    height: 43.85rem;
    margin-top: 22.3rem;
`
export const PopUpTitle=styled.div`
    ${({ theme }) => theme.fonts.heading_01};
    position: absolute;
    top: 3.4rem;

    font-weight: 700;
    letter-spacing: 0.0408rem;

`
export const PopUpSlide = styled(IcPopUpSlide)`
`
export const SlideWrapper = styled.div`
    position: absolute;
    backdrop-filter: blur(15px);
`
