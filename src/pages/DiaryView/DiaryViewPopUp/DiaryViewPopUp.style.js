import styled from "styled-components";


export const DiaryViewPopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 100%;
    width: 100%;
    position: absolute;

`
export const ReplyWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 30rem;
    width: 32rem;
    background-color: white;
    border-radius: 30px;
    position: absolute;
    bottom: 2.4rem;
`
export const ReplyTextWrapper = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    margin: 4rem 2.5rem 4rem 2.5rem;
    overflow: scroll;
    
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
    position: absolute;
    top: 8rem;
    left: 6.2rem;
`
export const SpicyTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 8.5rem;
    height: 7rem;
    border-radius: 2rem;
    background-color: ${props => props.selected ? 'white' : 'transparent'};
`
export const KindTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 8.5rem;
    height: 7rem;
    border-radius: 2rem;
    background-color: ${props => props.selected ? 'white' : 'transparent'};
`