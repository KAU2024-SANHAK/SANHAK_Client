import styled from "styled-components";
import svgThisMonthEmotion from "../../../../assets/svg/IcThisMonthEmotion"

export const ThisMonthEmotionIcon = styled(svgThisMonthEmotion)`
    display: flex;
`

export const Wrapper = styled.button`
width: 210px;
height: 182px;
flex-shrink: 0;
border-radius: 30px;
background: var(--Warm-Pink, linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.39) 111.04%), #FFA2A2);
`

export const ThisMonthEmotionText = styled.p`
    ${({ theme }) => theme.fonts.body_01};
`