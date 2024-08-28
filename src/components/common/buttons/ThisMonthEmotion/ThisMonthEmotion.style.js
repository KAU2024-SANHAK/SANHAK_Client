import styled from "styled-components";

export const Bubble = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    background-color: ${({ theme }) => theme.colors.pink.btn_pink};
    width: 17.8rem;
    height: 4.3rem;
    flex-shrink: 0;
    margin-left: 1.6rem;
    margin-top: 10rem;
    border-radius: 1.2rem;
`
export const Wrapper = styled.div`
    z-index: 10;
    width: 31.9rem;
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
    margin-left: 3.9rem;
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.caption_01};
    cursor: pointer;
`
export const HoneyBearWrapper = styled.div`
    width: 10rem;
    height: 0.1rem;
    display: flex;
    position: relative;
    margin-left: 2rem;
    bottom: 9rem;
`