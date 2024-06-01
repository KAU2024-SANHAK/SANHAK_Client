import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme: { colors } }) => colors.pink.white_pink};
  width: 67rem;
  height: 100vh;
  position: fixed;
  bottom: 0;
  z-index: 999;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_06};
  //color: ${({ theme: { colors } }) => colors.normal.black};

`;

export const LottieWrapper = styled.div`
  width: 50%;
`
