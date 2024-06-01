import styled from "styled-components";
import { IcHoneyBear } from "../../assets/svg";

export const InfoWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%
    height: auto;
    min-height: 100vh;
    max-height: fit-content;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.pink.background_pink};
`
export const TopWrapper = styled.div`

`
export const Header = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'center'})};
    align-items: center;
    margin: 3.2rem 0 1.6rem 0;
`
export const Title = styled.div`
    ${({ theme }) => theme.fonts.title};
    text-align: center;
    margin: 0 2rem 0 2rem;
`
export const Body = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    gap: 0.8rem;
`
export const Statement = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.body_06};
    width: 32rem;
    border-radius: 2rem;
    background-color: white;
    gap: 1.6rem;
    padding: 2.4rem 2.4rem 1.6rem 2.4rem;
`
export const HonearyBackgroundBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: white;
`
export const GgulbeesStatementBtn = styled.button`
    ${({ theme }) => theme.fonts.heading_03};
    width: 32rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: white;
`
export const Footer = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 7.5rem;
    justify-content: space-between;
    margin: 1.6rem 0 3.2rem 0;
`
export const FooterText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
    margin-bottom: 2rem;
`
export const HoneyBear = styled(IcHoneyBear)``;
export const GgulbeeFromat =styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
`
export const GgulbeeFromatStatement1 =styled.p`
    ${({ theme }) => theme.fonts.caption_01};
    margin-top: 1.6rem;
    margin-left: 1.6rem;
`
export const GgulbeeFromatStatement2 =styled.p`
    ${({ theme }) => theme.fonts.caption_01};
    margin-top: 1.6rem;
    margin-right: 1.6rem;
`
export const GgulbeeInfoWrapper =styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.caption_01};
`
export const GgulbeePhoto =styled.img`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 3.2rem;
    background-color: white;
`