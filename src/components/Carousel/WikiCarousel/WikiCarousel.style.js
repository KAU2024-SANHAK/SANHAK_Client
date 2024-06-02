import styled from 'styled-components';
import Slider from 'react-slick';
import { IcHoneyBear } from '../../../assets/svg';

export const WikiCarouselWrapper = styled.div`
  width: 100%;
  height: 50%;
  padding-left: 1.8rem;
`;
export const CharacterBoxWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;
export const CharacterBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.normal.white};
  width: 14.5rem;
  height: 16.6rem;
  margin-bottom: 1rem;
  padding: 1.4rem 1.7rem;
  border-radius: 1.8rem;
`;
export const CustomSlider = styled(Slider)`
  .slick-list {
    width: 32rem;
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;
export const HoneyBear = styled(IcHoneyBear)`
  display: flex;
`;
export const CostumeName = styled.p`
  ${({ theme }) => theme.fonts.body_08};
  letter-spacing: -0.0408rem;
`;
