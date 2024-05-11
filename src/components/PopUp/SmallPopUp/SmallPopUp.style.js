import styled from "styled-components";
import { IcPopUpSlide } from '../../../assets/svg/index'

export const PopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    right: -2.8rem;
    top: -5rem;
    width: 37.5rem;
    height: 34.9rem;
    margin-top: 22.3rem;
`
export const PopUpTitle=styled.div`
    ${({ theme }) => theme.fonts.big_title};
    position: absolute;
    top: 0rem;

    font-weight: 700;
    letter-spacing: 0.0408rem;

`
export const PopUpSlide = styled(IcPopUpSlide)`
`
export const SlideWrapper = styled.div`
    position: absolute;
    // backdrop-filter: blur(1rem);
`
