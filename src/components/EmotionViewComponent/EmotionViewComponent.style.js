import styled from "styled-components";

export const EmotionViewWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.50);
    -webkit-backdrop-filter: blur(1.5rem);
    -moz-backdrop-filter: blur(1.5rem);
    -o-backdrop-filter: blur(1.5rem);
    -ms-backdrop-filter: blur(1.5rem);
    backdrop-filter: blur(1.5rem);
`
export const BtnBackWrapper = styled.div`
    position: absolute;
    left: 2.8rem;
    top: 3.2rem;
`
export const EmotionViewComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    gap: 3.2rem;
    margin-top: 5rem;
`
export const TodayEmotionQ = styled.p`
    ${({ theme }) => theme.fonts.big_title};
    line-height: 120%;
    text-align: center;
`
export const EmotionPhoto = styled.div`
    width: 32rem;
    height: 32rem;
    flex-shrink: 0;
    border-radius: 320px;
    background: #FFF;
`
export const EmotionTagWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 10rem;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.49);
`
export const EmotionTag = styled.p`
    ${({ theme }) => theme.fonts.big_title};
`
export const EmotionPhotoWrapper = styled.div`
    margin-left: 4rem;
    margin-top: 1rem;
`