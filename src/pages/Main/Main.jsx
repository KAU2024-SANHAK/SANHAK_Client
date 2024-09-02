import * as S from './Main.style';
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1';
import React, { useState } from 'react';
import WriteDiaryButton from '../../components/common/buttons/WriteDiaryButton/WriteDiaryButton';
import BtnSlowDiary from '../../components/common/buttons/DiaryType/BtnSlowDiary';
import BtnFastDiary from './../../components/common/buttons/DiaryType/BtnFastDiary';
import { useNavigate } from 'react-router-dom';
import CreateDiaryButtonField from '../../components/CreateDiaryButtonField/CreateDiaryButtonField';

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
      <CreateDiaryButtonField />
    </S.MainWrapper>
  );
}

export default Main;
