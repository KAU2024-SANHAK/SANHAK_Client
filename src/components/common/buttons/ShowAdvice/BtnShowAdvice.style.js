import styled from "styled-components";export const RequestReplyViewBtnIcon = styled(IcGoToReplyBtn)`
`
export const RequestReplyViewBtnIconWrapper = styled.div`
    margin-bottom: -1rem;
`
export const RequestReplyViewBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 15rem;
    height: 5rem;
    flex-shrink: 0;
`
export const RequestReplyViewBtnText = styled.p`
    ${({ theme }) => theme.fonts.caption_04};
`