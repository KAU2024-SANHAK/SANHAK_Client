import * as S from './LoginError.style';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';
import { useNavigate } from 'react-router-dom';
import BtnComplete from '../../components/common/buttons/complete/BtnComplete';

const LoginError = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate('/');
  };
  return (
    <S.LoginErrorWrapper>
      <S.BoldText>로그인이 필요합니다.</S.BoldText>
      <S.LightText>
        <div>원하는 페이지로 이동하려면</div>
        로그인이 필요합니다.
      </S.LightText>
      <BtnComplete onClick={buttonHandler}>시작페이지로</BtnComplete>
      <BtnKakaoLogin />
    </S.LoginErrorWrapper>
  );
};

export default LoginError;
