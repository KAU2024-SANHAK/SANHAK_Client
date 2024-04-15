import styled from "styled-components";
import svgSearchByEmotionButton from "../../../../assets/svg/IcSearchByEmotionButton";

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
    display: flex;
`

export const Wrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    left: 2.2rem;
    top: 29.2rem;
`

export const SearchByEmotionButtonText = styled.p`
    position: absolute;
    left: 3.2rem;
    bottom: 1.2rem;
    ${({ theme }) => theme.fonts.caption_01};
`