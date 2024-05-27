import styled from 'styled-components';

export const Main1Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'end' })};
  width: 100%;
  height: 100vh;
`;
export const MainStep1Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 1.5rem;
  margin-bottom: 3.7rem;
  z-index: 10;
`;
export const MainButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  margin-top: 8.7rem;
  margin-right: 11rem;
  gap: 1.5rem;
`;