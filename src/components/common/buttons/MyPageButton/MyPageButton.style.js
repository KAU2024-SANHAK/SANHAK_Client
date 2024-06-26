import styled from 'styled-components';
import svgMyPageIcon from '../../../../assets/svg/IcMyPage';
import { motion } from 'framer-motion';

export const MyPageIcon = styled(svgMyPageIcon)``;
export const ClickedWrapper = styled(motion.div)`
  width: 9.3rem;
  height: 12rem;
  border-radius: 1.2rem;
  z-index: 100;
`
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 9.3rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.27);
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  border: none;
  padding: 2rem;
  gap: 1.8rem;
  z-index: 1;
`;
export const MyPageButtonText = styled.p`
  ${({ theme }) => theme.fonts.caption_01};
`;
