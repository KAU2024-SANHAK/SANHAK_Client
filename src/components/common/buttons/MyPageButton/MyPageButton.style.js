import styled from 'styled-components';
import svgMyPageIcon from '../../../../assets/svg/IcMyPage';

export const MyPageIcon = styled(svgMyPageIcon)``;
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 9.3rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.27);
  backdrop-filter: blur(7.5px);
  border: none;
  padding: 2rem;
  gap: 1.8rem;
  z-index: 1;
`;
export const MyPageButtonText = styled.p`
  ${({ theme }) => theme.fonts.caption_01};
`;
