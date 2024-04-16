import styled from "styled-components";
import { IcHoneyBear } from "../../../assets/svg";

export const WikiCarouselWrapper=styled.div`
    width: 100%;
    height: 50%;
`
export const CharacterBox=styled.p`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.normal.white};
    width: 14.5rem;
    height: 16.6rem;
    border-radius: 1.8rem;
`
export const HoneyBear=styled(IcHoneyBear)`
    display: flex;
`