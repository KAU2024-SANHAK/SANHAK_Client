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
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  border: none;
  padding: 1.5rem;
  gap: 1.3rem;
`;
export const SearchByEmotionButtonText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.caption_01};
`;
