import * as S from './Main.style'
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2'
import React, { useState } from "react"; // useState 추가
import Slider from "react-slick";
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';
import { MainStep } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';

function Main() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const [thisStep, setThisStep] = useRecoilState(MainStep);
  const steps = [ 
    { name: 'MainStep1', component: <MainStep1 /> }, 
    { name: 'MainStep2', component: <MainStep2 /> } 
  ];

  // 슬라이드 변경 시 현재 스텝을 MainStep 아톰에 저장
  const handleSlideChange = (index) => {
    setThisStep(steps[index].name);
  };

  return (
    <div className='slider-container'>
      <Slider {...settings} dotsClass="test-css" afterChange={handleSlideChange}>
        {steps.map((step, idx)=>(
          <S.Wrapper key={idx}>
            {step.component}
          </S.Wrapper>
        ))}
      </Slider>
      
      <S.WriteDiaryButtonWrapper>
        <WriteDiaryButton />
      </S.WriteDiaryButtonWrapper>

      {/* 슬라이더 컴포넌트 바깥에 StepProgress 컴포넌트를 배치 */}
      <S.MainStepWrapper>
        <StepProgress steps={steps} cur={thisStep} />
        {console.log(thisStep)}
      </S.MainStepWrapper>
    </div>
  );
}

export default Main;
