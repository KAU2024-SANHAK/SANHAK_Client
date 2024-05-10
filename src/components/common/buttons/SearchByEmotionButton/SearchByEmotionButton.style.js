import styled from "styled-components";
import svgSearchByEmotionButton from "../../../../assets/svg/IcSearchByEmotionButton";

export const SearchByEmotionButtonIcon = styled(svgSearchByEmotionButton)`
`
export const SearchByEmotionIconWrapper = styled.div`
    position: absolute;
    left: 2.0rem;
    top: 2.0rem;
`
export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'center'})};
    width: 9.3rem;
    height: 12rem;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.27);
    backdrop-filter: blur(7.5px);
    border: none;
`
export const SearchByEmotionButtonText = styled.p`
    position: absolute;
    left: 2.6rem;
    bottom: 1.2rem;
    ${({ theme }) => theme.fonts.caption_01};
`