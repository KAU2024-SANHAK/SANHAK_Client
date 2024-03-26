import styled from 'styled-components';

export const StartWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
`;
