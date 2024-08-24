import styled from 'styled-components';

export const OnBoardingPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    187deg,
    #ffbbcb 20.43%,
    #ffdae3 81.25%,
    #dcc6cc 100.45%,
    #999 100.45%
  );
`;
export const ProgressWrapper = styled.div`
  position: absolute;
  top: 3rem;
`;
