import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme: { colors } }) => colors.gradient.gradient_pink};
  width: 100%;
  height: 100vh;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  //color: ${({ theme: { colors } }) => colors.normal.black};
  margin-top: 0.8rem;
`;
