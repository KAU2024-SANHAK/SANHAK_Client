import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React from "react";
import Slider from "react-slick";

function Main() {
  const settings = {
    dots: true,
    
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    //
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#trans",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };
  return (
    <div className='slider-container'>
      <Slider {...settings} dotsClass="test-css">
        <S.Wrapper>
          <MainStep1/>
        </S.Wrapper>
        <S.Wrapper>
          <MainStep2/>
        </S.Wrapper>
      </Slider>
    </div>
  );
}

export default Main;