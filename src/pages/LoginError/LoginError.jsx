import { useNavigate } from 'react-router-dom';
import * as S from './LoginError.style';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';

const LoginError = () => {
  const navigate = useNavigate();

  return (
    <S.LoginErrorWrapper>
      <S.BoldText>로그인이 필요합니다.</S.BoldText>
      <S.LightText>
        <div>원하는 페이지로 이동하려면</div>
        로그인이 필요합니다.
      </S.LightText>
      <BtnKakaoLogin />
    </S.LoginErrorWrapper>
  );
};
export default LoginError;
