import styled from 'styled-components';
import svgSearchByEmotionButton from '../../../../assets/svg/IcSearchByEmotionButton';

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
  width: 4.6rem;
`;
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 9.3rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.27);
  backdrop-filter: blur(7.5px);
  border: none;
  padding: 1.5rem;
  gap: 1.3rem;
  z-index: 1;
`;
export const SearchByEmotionButtonText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.caption_01};
`;
