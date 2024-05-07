import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.heading_01};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  color: ${({ theme }) => theme.colors.normal.black};
  width: 100%;
  height: 100vh;

  font-weight: 700;
  letter-spacing: -0.0408rem;
`