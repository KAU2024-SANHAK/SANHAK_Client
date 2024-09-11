import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  ${({ theme }) => theme.fonts.heading_03};
  background-color: ${({ theme }) => theme.colors.normal.white};
  ${({ theme : { mixin } }) => mixin.flexCenter({})}
  width: 16.2rem;
  height: 6rem;
  border-radius: 3rem;
`;