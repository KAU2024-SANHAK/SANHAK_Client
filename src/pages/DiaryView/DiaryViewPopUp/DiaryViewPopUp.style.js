import styled from "styled-components";


export const DiaryViewPopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 100vh;
    bottom: 0rem;
    z-index:10;
`
export const ReplyWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 30rem;
    width: 32rem;
    background-color: white;
    border-radius: 30px;
    position: fixed;
    bottom: 2.4rem;
    overflowY: auto;
`
export const ReplyTextWrapper = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    padding: 4rem 2.5rem 4rem 2.5rem;
    overflowY: auto;
    
`
export const Spicy = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    padding-bottom: 2rem;
`
export const Kind = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    padding-bottom: 2rem;
`
export const BtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    position: fixed;
    top: 30.4rem;
    left: 6rem;
`
export const SpicyTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 8.5rem;
    height: 7rem;
    border-radius: 2rem;
    background-color: ${props => props.selected ? 'white' : 'trnasparent'};
`
export const KindTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 8.5rem;
    height: 7rem;
    border-radius: 2rem;
    background-color: ${props => props.selected ? 'white' : 'trnasparent'};
`