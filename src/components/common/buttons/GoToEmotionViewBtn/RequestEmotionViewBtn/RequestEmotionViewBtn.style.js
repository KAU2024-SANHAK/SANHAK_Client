import styled from "styled-components";
import IcTodayEmotionBtn from "../../../../../assets/svg/IcTodayEmotionBtn";

export const RequestEmotionViewBtnIcon = styled(IcTodayEmotionBtn)`
`
export const RequestEmotionViewBtnIconWrapper = styled.div`
    padding-left: 1rem;
    padding-top: 1rem;
`
export const RequestEmotionViewBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'row', justify:'end'})};
    width: 15.2rem;
    height: 5rem;
    flex-shrink: 0;
`
export const RequestEmotionViewBtnText = styled.p`
    ${({ theme }) => theme.fonts.body_10};
    padding-top: 1rem;
    text-decoration: underline;
`