import Slider from 'react-slick';
import styled from 'styled-components';

export const MainStep2Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'center'})};
    width: 100%;
    height: 100vh;
`
// export const MainStep2ComponentWrapper = styled.div`
//     // ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', justify: 'center'})};
//     // margin-top: 19.8rem;
//     position: absolute;
//     top: 19.8rem;
//     gap: 0.8rem;
// `