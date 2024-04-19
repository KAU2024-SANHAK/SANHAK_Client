import styled from 'styled-components';

export const StartPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.heading_01};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  color: ${({ theme }) => theme.colors.normal.black};
  width: 100%;
  height: 100vh;

  font-weight: 700;
  letter-spacing: -0.0408rem;
`
export const TitleWrapper= styled.div`
  width: 28.1rem;
  height: 7rem;
  text-align: left;
  margin-bottom: 2rem;

`
export const SubTitle = styled.p`
  padding-bottom: 0.7rem;
`
export const Title = styled.p`
  ${({ theme }) => theme.fonts.big_title};
  line-height: 3rem;
`
export const HoneyBearWrapper = styled.div`
  position: absaolute;
  margin-top: 3rem;
  padding-bottom: 2.5rem;
`
export const ButtonField = styled.div`
  position: absolute;
  bottom: 8rem;
`