import styled from 'styled-components';
import svgSearchByEmotionButton from '../../../../assets/svg/IcSearchByEmotionButton';
import { motion } from 'framer-motion';

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
  width: 4.6rem;
`;
export const SearchByEmotionClickedWrapper = styled(motion.div)`
  width: 9.3rem;
  height: 12rem;
  border-radius: 1.2rem;
  z-index: 100;
`;
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 9.3rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.27);
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  border: none;
  padding: 1.5rem;
  gap: 1.3rem;
  z-index: 1;
`;
export const SearchByEmotionButtonText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.caption_01};
`;
