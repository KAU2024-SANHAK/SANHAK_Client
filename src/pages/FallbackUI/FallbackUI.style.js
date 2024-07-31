import styled from 'styled-components';

export const FallBackWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  width: 100%;
  height: 100vh;
`;

export const BoldText = styled.div`
  ${({ theme }) => theme.fonts.body_01};
  padding-bottom: 2rem;
`;

export const LightText = styled.div`
  ${({ theme }) => theme.fonts.body_08};
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;
