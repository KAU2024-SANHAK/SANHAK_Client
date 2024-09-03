import styled from 'styled-components';

export const MenuHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ 'justify' : 'flex-end' })};
  width: 100%;
  gap: 2.5rem;
  margin-bottom: 10rem;
  margin-right: 2.7rem;
`;