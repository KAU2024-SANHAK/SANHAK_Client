import * as S from './Start.style';
import { kakaoURL } from '../../utils/login';

const handleLogin=()=>{
  window.location.href = kakaoURL;
}


function Start() {
  return (
    <S.StartWrapper>
      <h1>시작 페이지 입니다.</h1>

      <button type='button'
      onClick={()=>{handleLogin()}}
      ></button>
    </S.StartWrapper>
  );
}

export default Start;
