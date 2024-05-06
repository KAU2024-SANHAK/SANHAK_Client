import styled from "styled-components";
import { IcGoToReplyBtn } from "../../../../../assets/svg";

export const ResponseReplyViewBtnIcon = styled(IcGoToReplyBtn)`
`
export const ResponseReplyViewBtnIconWrapper = styled.div`
    margin-bottom: -1rem;
`
export const ResponseReplyViewBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 15rem;
    height: 5rem;
    flex-shrink: 0;
`
export const ResponseReplyViewBtnText = styled.p`
    ${({ theme }) => theme.fonts.caption_04};
`