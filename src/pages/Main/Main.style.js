import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IcHoneyBear } from '../../assets/svg';

export const WholeWrapper = styled.div`
`
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: linear-gradient(
    187deg,
    #ffbbcb 20.43%,
    #ffdae3 81.25%,
    #dcc6cc 100.45%,
    #999 100.45%
  );
`;
export const Honeybear = styled(IcHoneyBear)``;
export const MainStepWrapper = styled.div`
  position: fixed;
  left: 41.5%;
  top: 1rem;
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
  width: 100%;
  position: fixed;
  right: 0rem;;
  bottom: 0rem;
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
export const MainStep1HoneyBearWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 4rem;
  left: 8.7rem;
`;
export const MainStep2HoneyBearWrapper = styled.div`
  position: fixed;
  height: 100vh;
  right: 9rem;
  top: 4rem;
`;
