import styled from "styled-components";

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({direction: 'row'})};
  justify-content: end;
  width: 15.2rem;
  height: 4.4rem;
  flex-shrink: 0;
  background: transparent;
  gap: 1.2rem;
`
export const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.body_10};
  text-decoration: underline;
  color: black;
`
export const TT = styled.p`
  ${({ theme }) => theme.fonts.heading_01};
  font-weight: 300;
`