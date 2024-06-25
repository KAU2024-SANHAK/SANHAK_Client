import styled from "styled-components";
import { motion } from 'framer-motion';

export const ClickedWrapper = styled(motion.div)`
    width: 15.4rem;
    height: 9.8rem;
    border-radius: 3rem;
`
export const EmotionTypeBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 15.4rem;
    height: 9.8rem;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.70);
    border-radius: 3rem;
`
export const EmotionTypeBtnText = styled.p`
    position: relative;
    ${({ theme }) => theme.fonts.heading_01};
`