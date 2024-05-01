import * as S from './Start.style';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';
import BtnComplete from '../../components/common/buttons/complete/BtnComplete';
import HoneyBear from '../../components/common/HoneyBear/HoneyBear';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  const handleStartButton = () => {
    localStorage.getItem('FIRST_LOGIN') === true ? navigate('/onboarding') : navigate('/main');
  };

  return (
    <S.StartPageWrapper>
      <S.TitleWrapper>
        <S.SubTitle>꿀같은 일상을 담는 일기서비스</S.SubTitle>
        <S.Title>허니어리</S.Title>
      </S.TitleWrapper>

      <S.HoneyBearWrapper>
        <HoneyBear height='34rem' />
      </S.HoneyBearWrapper>

      <S.ButtonField>
        {/* {localStorage.getItem('EXIT_LOGIN_TOKEN') === false ? <BtnKakaoLogin/> : 
        <BtnComplete onClick={()=>{handleStartButton()}}>
          허니어리 시작하기  
        </BtnComplete>
        } */}
        <BtnKakaoLogin />
      </S.ButtonField>
    </S.StartPageWrapper>
  );
}

export default Start;
