import styled from "styled-components";
import SvgIcTodayEmotionBtn from "../../../../../assets/svg/IcTodayEmotionBtn";

export const TodayEmotionBtnIcon = styled(SvgIcTodayEmotionBtn)`
`
export const TodayEmotionBtnIconWrapper = styled.div`

`
export const TodayEmotionBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'row', justify:'end'})};
    width: 15.2rem;
    height: 5rem;
    flex-shrink: 0;
`
export const TodayEmotionBtnText = styled.p`
    ${({ theme }) => theme.fonts.body_10};
`