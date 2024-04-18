import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.colors.gradient.gradient_pink};
    width: 200vh;
    height: 100vh;
    background: linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);
`
export const MainStepSlider = styled(Slider)`
    .slick-list {
        width: 32rem;
    }
    .slick-prev: before;
    .slick-next: before {
        display: none;
    }
`