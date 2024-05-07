import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React from "react";
import Slider from "react-slick";
import HoneyBearMainStep1 from '../../components/common/HoneyBearMainStep1/HoneyBearMainStep1';
import HoneyBearMainStep2 from '../../components/common/HoneyBearMainStep2/HoneyBearMainStep2';
import Calendar from '../../components/common/Calendar/Calendar';
// import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton';

function Main() {
  const settings = {
    dots: false,
    infinite: false,
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
        <div>
          <S.Wrapper>
            <S.MainStep1HoneyBearWrapper>
              <HoneyBearMainStep2/>
            </S.MainStep1HoneyBearWrapper>
            <MainStep1/>
          </S.Wrapper>
        </div>
        <div>
          <S.Wrapper>
            <div>
              <S.MainStep2HoneyBearWrapper>
                <HoneyBearMainStep1/>
              </S.MainStep2HoneyBearWrapper>
              {/* <MainStep2/> */}
              {/* <S.MainStep2ComponentWrapper> */}
                  <Calendar/>

              {/* </S.MainStep2ComponentWrapper> */}
            </div>
            
          </S.Wrapper>
          <h2>
            Hello
          </h2>
          <div>
            Hello
          </div>
          <p>
            hi
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Main;