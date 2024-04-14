import styled from "styled-components";
import svgSearchByEmotionButton from "../../../../assets/svg/IcSearchByEmotionButton";

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
    display: flex;
`

export const Wrapper = styled.div`
    background-color: transparent;
    border: none;
    position: absolute;
    left: 2.8rem;
    top: 29.2rem;
`

export const SearchByEmotionButtonText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`