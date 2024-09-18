import styled from "styled-components";
import { IcHoneyBear } from "../../assets/svg";

export const InfoWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: auto;
    min-height: 100vh;
    max-height: fit-content;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.pink.background_pink};
`
export const TopWrapper = styled.div`

`
export const Header = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction: 'column', justify: 'center'})};
    align-items: start;
    margin: 3.2rem 0 3.2rem 0;
`
export const Subtitle = styled.div`
    ${({ theme }) => theme.fonts.title};
    text-align: start;
    margin: 0 1rem 0 1rem;
`
export const Title = styled.div`
    ${({ theme }) => theme.fonts.big_title};
    text-align: start;
    margin: 0.8rem 1rem 0 1.1rem;
`
export const Body = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    gap: 0.8rem;
`
export const FirstStatement = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.body_06};
    width: 32rem;
    border-radius: 1.2rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    gap: 1.6rem;
    padding: 2.4rem 2.4rem 1.6rem 2.4rem;
`
export const SecondStatement = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.body_06};
    width: 32rem;
    border-radius: 1.2rem;
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
    gap: 1.6rem;
    padding: 2.4rem 2.4rem 1.6rem 2.4rem;
`
export const HonearyBackgroundBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 4rem;
    border-radius: 1.2rem;
    background-color: transparent;
`
export const GgulbeesStatementBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 4rem;
    border-radius: 1.2rem;
    background-color: transparent;
`
export const HonearyBackgroundBeforeClickBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 4rem;
    border-radius: 1.2rem;
    background-color: white;
`
export const GgulbeesStatementBeforeClickBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    display: flex;
    flex-direction: row;
    width: 32rem;
    height: 4rem;
    border-radius: 1.2rem;
    background-color: white;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const Footer = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 6.8rem;
    justify-content: space-between;
    margin: 3.2rem 0 3.2rem 0;
`
export const FooterText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`
export const HoneyBear = styled(IcHoneyBear)``;
export const format =styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
`
export const GgulbeeFromatStatement1 =styled.p`
    ${({ theme }) => theme.fonts.caption_02};
    margin-left: 1.6rem;
`
export const GgulbeeFromatStatement2 =styled.p`
    ${({ theme }) => theme.fonts.caption_02};
    margin-right: 1.6rem;
`
export const IntroductionText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`
export const GgulbeePhotoWrapper =styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.caption_01};
`
export const GgulbeeInfoWrapper1 =styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
    ${({ theme }) => theme.fonts.body_06};
`
export const GgulbeeInfoWrapper2 =styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({align: 'end', direction: 'column'})};
    ${({ theme }) => theme.fonts.body_06};
`
export const GgulbeePhoto =styled.img`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 3.2rem;
    background-color: white;
`