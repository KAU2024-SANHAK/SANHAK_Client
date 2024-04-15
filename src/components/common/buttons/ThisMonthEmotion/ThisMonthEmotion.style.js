import styled from "styled-components";

export const Boxe = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 5.6rem;
    height: 6.0rem;
    flex-shrink: 0;
    background-color: olive;
    margin-left: 1.7rem;
    margin-top: 2.7rem;
    border-radius: 30px;
`
export const ComponentWrapper = styled.div`
    // 곰돌이 표정과 말풍선을 가져올 것입니다
    position: absolute;
    left: 2.0rem;
    top: 2.0rem;
`
export const Wrapper = styled.div`
    width: 21rem;
    height: 18rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--Warm-Pink, linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.39) 111.04%), #FFA2A2);
`
export const ThisMonthEmotionText = styled.p`
    ${({ theme }) => theme.fonts.body_01};
`