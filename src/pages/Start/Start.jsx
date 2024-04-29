import * as S from './Start.style';
import { kakaoURL } from '../../utils/login';
import BtnKakaoLogin from '../../components/common/buttons/KakaoLogin/BtnKakaoLogin';
import BtnStart from '../../components/common/buttons/Start/BtnStart';


const handleLogin=()=>{
  window.location.href = kakaoURL;
}

function Start() {
  
  return (
    <S.StartWrapper>
      <h1>시작 페이지 입니다.</h1>

      {localStorage.getItem('') === false ? <BtnKakaoLogin/> : <BtnStart/>}

    </S.StartWrapper>
  );
}

export default Start;
