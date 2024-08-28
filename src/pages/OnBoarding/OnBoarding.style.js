import styled from 'styled-components';

export const OnBoardingPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  width: 100%;
  height: 100vh;
`;
export const ProgressWrapper = styled.div`
  position: absolute;
  top: 3rem;
`;
