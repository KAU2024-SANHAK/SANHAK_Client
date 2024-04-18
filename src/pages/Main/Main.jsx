import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React from "react";
import Slider from "react-slick";

function Main() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  // const steps = [ {name: 'MainStep1', component: <MainStep1/>}, {name: 'MainStep2', component: <MainStep2/>} ]
  // retrun(
  //   <S.Wrapper>
  //       <S.MainStepSlider>
  //        {steps.map((step, idx)=>(
  //             <S.SlideWrapper key = {idx}>
  //               {step.component}
  //              <S.ProgressWrapper>
  //           <StepProgress steps={steps} cur = {step.name} />
  //         </S.ProgressWrapper>
  //       </S.SlideWrapper>
  //       ))}
  //     </S.MainStepSlider>
  //   </S.Wrapper>
  // )
  
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