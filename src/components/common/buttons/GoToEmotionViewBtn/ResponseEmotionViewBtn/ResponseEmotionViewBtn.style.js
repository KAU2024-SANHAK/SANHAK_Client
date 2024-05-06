import styled from "styled-components";
import IcTodayEmotionBtn from "../../../../../assets/svg/IcTodayEmotionBtn";

export const ResponseEmotionViewBtnIcon = styled(IcTodayEmotionBtn)`
`
export const ResponseEmotionViewBtnIconWrapper = styled.div`
    padding-left: 1rem;
`
export const ResponseEmotionViewBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter()};
    width: 15.2rem;
    height: 5rem;
    flex-shrink: 0;
    gap: 1rem;
`
export const ResponseEmotionViewBtnText = styled.p`
    ${({ theme }) => theme.fonts.body_10};
    text-decoration: underline;
`