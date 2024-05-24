import * as S from './Main.style';
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1';
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2';
import React, { useState } from 'react'; // useState 추가
import Slider from 'react-slick';
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';
import { motion } from 'framer-motion';
import HoneyBearMainStep1 from '../../components/common/HoneyBearMainStep1/HoneyBearMainStep1';
import HoneyBearMainStep2 from '../../components/common/HoneyBearMainStep2/HoneyBearMainStep2';

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
    <div className='slider-container'>

      

      <Slider {...settings} dotsClass='test-css'>
        {steps.map((step, idx) => (
          <S.Wrapper key={idx}>
            <S.MainStepWrapper>
        {activeSlide === 0 ? (
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }} // 페이지 이동 시 작아지는 애니메이션
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} // 페이지 이동 완료 시 서서히 커지는 애니메이션
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }} // 페이지 떠날 때 다시 작아지는 애니메이션
              transition={{ duration: 0.5 }}
            >
              <S.MainStep1HoneyBearWrapper>
                <HoneyBearMainStep1 />
              </S.MainStep1HoneyBearWrapper>
            </motion.div>
        ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} // 페이지 이동 시 작아지는 애니메이션
              animate={{ opacity: 1, scale: 1 }} // 페이지 이동 완료 시 서서히 커지는 애니메이션
              exit={{ opacity: 0, scale: 0.5 }} // 페이지 떠날 때 다시 작아지는 애니메이션
              transition={{ duration: 0.5 }}
            >
              <S.MainStep2HoneyBearWrapper>
                <HoneyBearMainStep2 />
              </S.MainStep2HoneyBearWrapper>
            </motion.div>
        )}
      </S.MainStepWrapper>
      {step.component}
      </S.Wrapper>
        ))}
      </Slider>

      <S.WriteDiaryButtonWrapper>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
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
    </div>
  );
}

export default Main;
