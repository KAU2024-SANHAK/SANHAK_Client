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
export const MainStep1HoneyBearWrapper = styled.div`
    position: absolute;
    right: 9rem;
    top: 4rem;
`
export const MainStep2HoneyBearWrapper = styled.div`
    position: absolute;
    left: 8.7rem;
    top: 4rem;
`
export const MainStep2ComponentWrapper = styled.div`
    // ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', justify: 'center'})};
    // margin-top: 19.8rem;
    left: 40rem;
    position: absolute;
    top: 19.8rem;
    gap: 0.8rem;
`