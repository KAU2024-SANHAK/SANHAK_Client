import styled from "styled-components";
import SvgIcGoToReplyBtn from "../../../../assets/svg/IcGoToReplyBtn";

export const GoToReplyBtnIcon = styled(SvgIcGoToReplyBtn)`
`
export const GoToReplyBtnIconWrapper = styled.div`

`
export const GoToReplyBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 15rem;
    height: 5rem;
    flex-shrink: 0;
    gap: 0rem;
`
export const GoToReplyBtnText = styled.p`
    ${({ theme }) => theme.fonts.caption_04};
`