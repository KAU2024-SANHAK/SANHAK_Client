import styled from "styled-components";

export const Bubble = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 17.8rem;
    height: 4.3rem;
    flex-shrink: 0;
    background-color: white;
    margin-left: 1rem;
    margin-top: 10rem;
    border-radius: 12px;
`
export const Wrapper = styled.div`
    z-index: 10;
    width: 21rem;
    height: 18rem;
    flex-shrink: 0;
    border-radius: 30px;
    ${({ theme }) => theme.colors.gradient.this_month_emotion_gradient};
`
export const ThisMonthEmotionText = styled.p`
    ${({ theme }) => theme.fonts.body_01};
    width: 17.8rem;
    padding-top: 1.2rem;
    text-align: center;

`
export const PlayList = styled.p`
    margin-left: 3.7rem;
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.caption_01};
`
export const HoneyBearWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 33rem;
    right: 64rem;
`