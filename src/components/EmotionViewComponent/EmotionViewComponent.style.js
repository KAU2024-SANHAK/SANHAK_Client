import styled from "styled-components";
import { IcHappy } from "../../assets/svg";
import { IcAngry } from "../../assets/svg";
import { IcSad } from "../../assets/svg";
import { IcWorried } from "../../assets/svg";
import { IcRelax } from "../../assets/svg";
import { IcSurprised } from "../../assets/svg";

export const Happy = styled(IcHappy)``
export const Sad = styled(IcSad)``
export const Angry = styled(IcAngry)``
export const Worried = styled(IcWorried)``
export const Relax = styled(IcRelax)``
export const Surprised = styled(IcSurprised)``

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