import * as S from './Start.style';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';
import BtnStart from '../../components/common/buttons/Start/BtnStart';
import HoneyBear from '../../components/common/HoneyBear/HoneyBear';

function Start() {
  
  return (
    <S.StartPageWrapper>
      
      <S.TitleWrapper>
        <S.SubTitle>
          꿀같은 일상을 담는 일기서비스
        </S.SubTitle>
        <S.Title>
          허니어리
        </S.Title>
      </S.TitleWrapper>

      <HoneyBear height='28.9rem' />

      <S.ButtonField>
        {localStorage.getItem('EXIT_LOGIN_TOKEN') === false ? <BtnKakaoLogin/> : <BtnStart/>}
      </S.ButtonField>

    </S.StartPageWrapper>
  );
}

export default Start;
