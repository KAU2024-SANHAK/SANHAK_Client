import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: transparent;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  //color: ${({ theme: { colors } }) => colors.normal.black};
  text-align: center;

`;

export const LottieWrapper = styled.div`
  width: 70%;
`
