import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme: { colors } }) => colors.pink.white_pink};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  //color: ${({ theme: { colors } }) => colors.normal.black};

`;

export const LottieWrapper = styled.div`
  width: 90%;
`
