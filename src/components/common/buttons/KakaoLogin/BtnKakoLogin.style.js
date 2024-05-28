import styled from 'styled-components';
import SvgIcKakaoLogin from '../../../../assets/svg/IcKakaoLogin';

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}
  background-color: transparent;
`;

export const KakaoLoginButton = styled(SvgIcKakaoLogin)`
  display: flex;
`;
