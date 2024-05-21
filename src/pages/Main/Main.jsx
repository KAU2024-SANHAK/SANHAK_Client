import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React, { useState } from "react"; // useState 추가
import Slider from "react-slick";
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';

function Main() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    }
  };
  const steps = [ 
    { name: 'MainStep1', component: <MainStep1 /> }, 
    { name: 'MainStep2', component: <MainStep2 /> } 
  ];

  return (
    <div className='slider-container'>
      <Slider {...settings} dotsClass="test-css">
        {steps.map((step, idx)=>(
          <S.Wrapper key = {idx}>
            {step.component}
          </S.Wrapper>))}
      </Slider>
      
      <S.WriteDiaryButtonWrapper>
        <S.BtnWrapper>
          <WriteDiaryButton />
        </S.BtnWrapper>
      </S.WriteDiaryButtonWrapper>

      <S.MainStepWrapper>
        {activeSlide == 0 ?
        (
          <StepProgress steps={steps} cur={'MainStep1'}/>
        ) : (
          <StepProgress steps={steps} cur={'MainStep2'}/>
        )}
      </S.MainStepWrapper>
    </div>
  );
}

export default Main;
