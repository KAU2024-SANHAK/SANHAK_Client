import styled from 'styled-components';

export const MenuHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ 'justify' : 'flex-end' })};
  background-color: ${({ theme }) => theme.colors.pink.background_pink};
  width: 32rem;
  position: fixed;
  padding: 2rem 0 1rem 0;
  top: 0;
  gap: 2.5rem;
  z-index: 10;
`;