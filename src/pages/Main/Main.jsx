import * as S from './Main.style';
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1';
import React, { useState } from 'react';
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import BtnSlowDiary from '../../components/common/buttons/DiaryType/BtnSlowDiary';
import BtnFastDiary from './../../components/common/buttons/DiaryType/BtnFastDiary';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const onUpdate = () => {
    setIsClick(!isClick);
  };

  const handleFastDiary = () => {
    navigate('/fastdiary');
  };
  const handleSlowDiary = () => {
    navigate('/slowdiary');
  };

  return (
    <S.MainWrapper>
      <S.HoneyBearWrapper>
        <S.HoneyBear />
      </S.HoneyBearWrapper>
      <MainStep1 />
      <S.ButtonMotionWrapper
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        isClick={isClick}
      >
        {
          isClick && (
            <>
              <S.CreateButtonField>
                <S.ButtonText>
                  직접 일기 쓰기
                </S.ButtonText>
                <BtnSlowDiary onClick={handleSlowDiary}/>
              </S.CreateButtonField>

              <S.CreateButtonField>
                <S.ButtonText>
                  키워드로 빠르게 쓰기
                </S.ButtonText>
                <BtnFastDiary onClick={handleFastDiary}/>
              </S.CreateButtonField>
            </>
          )
        }
        <WriteDiaryButton isClick={isClick} onUpdate={onUpdate}/>
      </S.ButtonMotionWrapper>


    </S.MainWrapper>
  );
}

export default Main;
