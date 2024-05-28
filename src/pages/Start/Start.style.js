import styled from 'styled-components';

export const StartPageWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'space-between', align: 'center' })};
  ${({ theme }) => theme.fonts.heading_01};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  color: ${({ theme }) => theme.colors.normal.black};
  width: 100%;
  height: 100vh;
  padding: 9.4rem 3.4rem 8.1rem 3.4rem;

  font-weight: 700;
  letter-spacing: -0.0408rem;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 7rem;
  margin-bottom: 2rem;
`;
export const SubTitle = styled.p`
  width: 100%;
  padding-bottom: 0.7rem;
`;
export const Title = styled.p`
  ${({ theme }) => theme.fonts.big_title};
  line-height: 3rem;
`;
export const ButtonField = styled.div``;
