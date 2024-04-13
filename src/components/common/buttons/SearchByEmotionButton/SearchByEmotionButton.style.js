import styled from "styled-components";
import svgSearchByEmotionButton from "../../../../assets/svg/IcSearchByEmotionButton";

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
    display: flex;
`

export const Wrapper = styled.button`
background-color: transparent;
border: none;
`

export const SearchByEmotionButtonText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`