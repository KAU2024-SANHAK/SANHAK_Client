import styled from "styled-components";
import { IcGoToReplyBtn } from "../../../../assets/svg";

export const RequestReplyViewBtnIcon = styled(IcGoToReplyBtn)`
`
export const RequestReplyViewBtnIconWrapper = styled.div`
    margin-bottom: -1rem;
`
export const ButtonWrapper = styled.button`
  background: transparent;
  width: 15rem;
  height: 5rem;
`
export const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.caption_04};
  color: black;
`