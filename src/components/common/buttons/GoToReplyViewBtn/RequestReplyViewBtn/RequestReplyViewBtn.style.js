import styled from "styled-components";
import { IcGoToReplyBtn } from "../../../../../assets/svg";

export const RequestReplyViewBtnIcon = styled(IcGoToReplyBtn)`
`
export const RequestReplyViewBtnIconWrapper = styled.div`

`
export const RequestReplyViewBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 15rem;
    height: 5rem;
    flex-shrink: 0;
    gap: 0rem;
`
export const RequestReplyViewBtnText = styled.p`
    ${({ theme }) => theme.fonts.caption_04};
`