import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme }) => theme.fonts.heading_01};
  background-color: ${(props) =>
    props.$isClick === true
      ? ({ theme }) => theme.colors.pink.btn_hover_pink
      : ({ theme }) => theme.colors.pink.btn_pink};
  width: 28rem;
  height: 4.86rem;
  flex-shrink: 0;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  border-radius: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.0408rem;
  color: black;
`;
