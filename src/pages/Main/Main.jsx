import * as S from './Main.style';
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1';
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2';
import React, { useState } from 'react';
import Slider from 'react-slick';
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';
import { motion } from 'framer-motion';

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
    },
  };
  const steps = [
    { name: 'MainStep1', component: <MainStep1 /> },
    { name: 'MainStep2', component: <MainStep2 /> },
  ];

  return (
    <S.WholeWrapper className='slider-container'>
      <Slider {...settings} dotsClass='test-css'>
        {steps.map((step, idx) => (
          <S.Wrapper key={idx}>
            {activeSlide === 0 ? (
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.5 }} // 초기 위치 오른쪽으로 이동
                animate={{ opacity: 1, x: 0, scale: 1 }} // 페이지 이동 완료 시 중앙으로 이동
                exit={{ opacity: 0, x: -100, scale: 0.5 }} // 페이지 떠날 때 왼쪽으로 이동
                transition={{ duration: 0.5 }}
              >
                <S.MainStep1HoneyBearWrapper>
                  <S.Honeybear height={550} />
                </S.MainStep1HoneyBearWrapper>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.5 }} // 초기 위치 왼쪽으로 이동
                animate={{ opacity: 1, x: 0, scale: 1 }} // 페이지 이동 완료 시 중앙으로 이동
                exit={{ opacity: 0, x: 100, scale: 0.5 }} // 페이지 떠날 때 오른쪽으로 이동
                transition={{ duration: 0.5 }}
              >
                <S.MainStep2HoneyBearWrapper>
                  <S.Honeybear height={550} />
                </S.MainStep2HoneyBearWrapper>
              </motion.div>
            )}
            {step.component}
          </S.Wrapper>
        ))}
      </Slider>

      <S.WriteDiaryButtonWrapper>
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <WriteDiaryButton />
        </motion.div>
      </S.WriteDiaryButtonWrapper>

      <S.MainStepWrapper>
        {activeSlide === 0 ? (
          <div>
            <StepProgress steps={steps} cur={'MainStep1'} />
          </div>
        ) : (
          <div>
            <StepProgress steps={steps} cur={'MainStep2'} />
          </div>
        )}
      </S.MainStepWrapper>
    </S.WholeWrapper>
  );
}

export default Main;
