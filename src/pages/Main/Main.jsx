import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React from "react";
import Slider from "react-slick";
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';

function Main() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };


  const steps = [ {name: 'MainStep1', component: <MainStep1/>}, {name: 'MainStep2', component: <MainStep2/>} ]

  return (
    <div className='slider-container'>
      <Slider {...settings} dotsClass="test-css">
        {steps.map((step, idx)=>(
          <S.Wrapper key = {idx}>
            {step.component}
            <S.MainStepWrapper>
              <StepProgress steps={steps} cur = {step.name} />
            </S.MainStepWrapper>
          </S.Wrapper>
        ))}
      </Slider>
      
      <S.WriteDiaryButtonWrapper>
        <WriteDiaryButton />
      </S.WriteDiaryButtonWrapper>

    </div>
  );
}

export default Main;