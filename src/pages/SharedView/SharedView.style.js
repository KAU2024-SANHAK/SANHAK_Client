import styled from 'styled-components';

export const SharedViewPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.pink.white_pink};
  width: 100%;
  height: 100vh;
`