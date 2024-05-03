import styled from 'styled-components'
import { IcDiaryFeeling } from "../../../../assets/svg"

export const DiaryFeelingButtonWrapper = styled.button`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.heading_01};
    width: 9.6rem;
    background-color: transparent;
    padding-top: 1rem;
    padding-left: 2rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.0408rem;
`
export const DiaryFeelingButton = styled(IcDiaryFeeling)`
    display: flex;
    fill: ${({ theme }) => theme.colors.normal.white};
`
export const FeelingText=styled.p`
    position: absolute;
`