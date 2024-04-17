import styled from "styled-components";

export const EmotionViewWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
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
    // display: flex;
    // justify-content: center;
    // 위에처럼 했는데 잘 안되네용..!
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