import styled from "styled-components";
import svgThisMonthEmotion from "../../../../assets/svg/IcMyPageButton";

export const ThisMonthEmotionIcon = styled(svgThisMonthEmotion)`
    display: flex;
`

export const Wrapper = styled.div`
background-color: transparent;
border: none;
position: absolute;
left: 2.8rem;
top: 42.4rem;
`

export const ThisMonthEmotionText = styled.p`
    ${({ theme }) => theme.fonts.body_01};
`