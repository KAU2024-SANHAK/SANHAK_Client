import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IcHoneyBear } from '../../assets/svg';

export const MainWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
`;
export const HoneyBear = styled(IcHoneyBear)``;
export const HoneyBearWrapper = styled.div`
  width: 32rem;
  position: absolute;
  top: 10rem;
`;
export const ButtonMotionWrapper = styled(motion.div)`
  ${({ theme: { mixin } }) => mixin.flexBox({ 
    'direction': 'column', 
    'justify': 'flex-end',
    'align': 'flex-end',
  })};
  ${({ theme, isClick}) => `
    ${isClick && `background: ${theme.colors.gradient.gradient_black};`}
  `};
  ${({ isClick }) => `
    ${isClick 
      ? `width: 100%;`
      : `width: 50%;`
    }
  `}
  position: fixed;
  right: 0rem;;
  bottom: 0rem;
  z-index: 100;
`;
export const CreateButtonField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ 
    'direction': 'row', 
    'align': 'center',
  })};
  padding-right: 1.5rem;
`;
export const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.body_01};
  color: ${({ theme }) => theme.colors.normal.white};
`;