import styled from "styled-components";
import SvgIcTodayEmotionBtn from "../../../../assets/svg/IcTodayEmotionBtn";

export const TodayEmotionBtnIcon = styled(SvgIcTodayEmotionBtn)`
`
export const TodayEmotionBtnIconWrapper = styled.div`
    // position: absolute;
    // right: 2.7rem;
    // top: 6.8rem;
`
export const TodayEmotionBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'row'})};
    width: 14.2rem;
    height: 5rem;
    flex-shrink: 0;
    gap: 1.5rem;
    background-color: black;
    z-index: 10;
`
export const TodayEmotionBtnText = styled.p`
    position: absolute;
    left: 2.1rem;
    bottom: 1.2rem;
    ${({ theme }) => theme.fonts.body_10};
`