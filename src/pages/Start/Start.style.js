import styled from 'styled-components';

export const StartWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ theme }) => theme.colors.normal.black};
`;
