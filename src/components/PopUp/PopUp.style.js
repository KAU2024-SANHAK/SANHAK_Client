import styled from "styled-components";
import {IcPopUpSlide} from '../../assets/svg/index'

export const PopUpWrapper=styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: white;
    position: absolute;
    width: 37.5rem;
    height: 44.4rem;
    margin-top: 22.3rem;
`
export const PopUpTitle=styled.div`
    ${({ theme }) => theme.fonts.heading_01};
    

`