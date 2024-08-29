import styled from 'styled-components';

export const Main1Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  gap: 1.5rem;
  z-index: 10;
`;
export const MainButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'space-between' })};
  width: 21rem;
  margin-top: 8.7rem;
  margin-right: 11rem;
  gap: 1.5rem;
`;
