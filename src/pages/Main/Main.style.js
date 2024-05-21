import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: linear-gradient(
    187deg,
    #ffbbcb 20.43%,
    #ffdae3 81.25%,
    #dcc6cc 100.45%,
    #999 100.45%
  );
`;
export const MainStepWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 37.5rem;
  position: fixed;
  top: 1rem;
`;
export const WriteDiaryButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
  position: fixed;
  bottom: 0rem;
  width: 100%;
`;
