import styled from "styled-components";

export const Boxe = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 5.6rem;
    height: 6.0rem;
    flex-shrink: 0;
    background-color: olive;
    margin-left: 1.7rem;
    margin-top: 2.7rem;
    border-radius: 12px;
`
export const Bubble = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 17.8rem;
    height: 4.3rem;
    flex-shrink: 0;
    background-color: white;
    margin-left: 1rem;
    margin-top: 1.3rem;
    border-radius: 12px;
`
export const Wrapper = styled.div`
    width: 21rem;
    height: 18rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--Warm-Pink, linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.39) 111.04%), #FFA2A2);
`
export const ThisMonthEmotionText = styled.p`
    margin-top: 1.2rem;
    margin-left: 4.882rem;
    ${({ theme }) => theme.fonts.body_01};
`
export const PlayList = styled.p`
    margin-left: 3.7rem;
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.caption_01};
`