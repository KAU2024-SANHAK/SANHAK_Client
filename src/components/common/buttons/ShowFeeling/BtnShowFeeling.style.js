import styled from "styled-components";

export const RequestEmotionViewBtnIconWrapper = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
`

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({justify: 'start', align: 'center'})};
  width: 15.2rem;
  height: 5rem;
  flex-shrink: 0;
  background: transparent;
  gap: 0.2rem;
`
export const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.body_10};
  text-decoration: underline;
`
export const TT = styled.p`
  ${({ theme }) => theme.fonts.heading_01};
  font-weight: 300;
  padding-bottom: 0.2rem;
`