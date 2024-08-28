import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DiaryListComponentWrapper = styled.div`
  display: flex;
  width: 32.0rem;
  height: 11.5rem;
  flex-shrink: 0;
  border-radius: 3rem;
  background: white;
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.colors.normal.white};
`;
export const PreviewImage = styled.img`
  background: ${({ theme }) => theme.colors.gray.dark_gray};  
  display: flex;
  margin: 1rem 0 1rem 1rem;
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 3rem;
`;
export const TextWrapper = styled.div`
  margin: 1.8rem 0 1.2rem 1.2rem;
`;
export const TitleText = styled.p`
  ${({ theme }) => theme.fonts.body_02};
`;
export const DateText = styled.p`
  ${({ theme }) => theme.fonts.caption_02};
`;
export const MotionButton = styled(motion.div)`
`;