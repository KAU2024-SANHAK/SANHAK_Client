import Slider from 'react-slick';
import styled from 'styled-components';

export const MainStep2Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'center'})};
    width: 100%;
    height: 100vh;
`
export const MainStep2HoneyBearWrapper = styled.div`
    position: absolute;
    left: 0rem;
    top: 3.929rem;
`
export const MainStep2ComponentWrapper = styled.div`
    // ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', justify: 'center'})};
    // margin-top: 19.8rem;
    position: absolute;
    top: 19.8rem;
    gap: 0.8rem;
`
export const slickStyle = styled(Slider)`
.test-css {
    bottom: -25px;
    width: 100%;
    list-style: none;
    text-align: end;
    position: absolute;
    right: 15px;
    padding: 0;
  }
  
  .test-css li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    /*margin: 1px;*/
    padding: 0;
    cursor: pointer;
  }
  
  .test-css li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  
  .test-css li button:before {
    font-size: 2.7rem;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .75;
    color: #6D6968;
  }
  
  .test-css li.slick-active button:before {
    opacity: .75;
    color: #ffffff;
  }
`