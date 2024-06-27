import * as S from './Start.style';
import BtnComplete from '../../components/common/buttons/Complete/BtnComplete';
import HoneyBear from '../../components/common/HoneyBear/HoneyBear';
import { useNavigate } from 'react-router-dom';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';
import { useEffect, useState } from 'react';
import BtnSubmit from '../../components/common/buttons/Submit/BtnSubmit';

function Start() {
  const navigate = useNavigate();
  const isToken = window.localStorage.getItem('LOGIN_TOKEN');
  const isFirstLogin = localStorage.getItem('FIRST_LOGIN');
  const ref = document.referrer;
  sessionStorage.setItem('url', ref);

  const handleGoInfo = () => {
    navigate('/information');
  };

  const handleStartButton = () => {
    //isFirstLogin ? navigate('/onboarding') : navigate('/main');
    navigate('/onboarding');
  };

  useEffect(() => {
    console.log(isToken);
    console.log(localStorage.getItem('LOGIN_TOKEN'));
  }, []);

  return (
    <S.StartPageWrapper>
      <S.TitleWrapper>
        <S.SubTitle>꿀같은 일상을 담는 일기서비스</S.SubTitle>
        <S.Title>허니어리</S.Title>
      </S.TitleWrapper>

      <HoneyBear width='100%' />

      <S.ButtonField>
        {isToken ? (
          <BtnComplete
            onClick={() => {
              handleStartButton();
            }}
          >
            허니어리 시작하기
          </BtnComplete>
        ) : (
          <BtnKakaoLogin />
        )}
        <S.BtnSubmit
          onClick={() => {
            handleGoInfo();
          }}
        >
          허니어리란?
        </S.BtnSubmit>
      </S.ButtonField>
    </S.StartPageWrapper>
  );
}

export default Start;
