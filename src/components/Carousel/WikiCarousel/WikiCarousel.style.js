import styled from "styled-components";
import Slider from "react-slick";
import { IcHoneyBear } from "../../../assets/svg";

export const WikiCarouselWrapper=styled.div`
    width: 100%;
    height: 50%;
    padding-left: 2.8rem;
`
export const CharacterBox=styled.p`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.normal.white};
    width: 14.5rem;
    height: 16.6rem;
    border-radius: 1.8rem;
`
export const CustomSlider=styled(Slider)`
    padding-right: 3rem;
    .slick-list{
        width: 70rem;
    }
    .slick-prev:before,
    .slick-next:before {
        display: none;	
    }
`
export const HoneyBear=styled(IcHoneyBear)`
    display: flex;
`