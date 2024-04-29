import * as S from './BtnKakoLogin.style'
import { kakaoURL } from '../../../../utils/login';

const handleLogin=()=>{
    window.location.href = kakaoURL;
  }
  

export default function BtnKakaoLogin(){
    return(
        
        <S.ButtonWrapper onClick={()=>{handleLogin()}}>
            <S.KakaoLoginButton/>
        </S.ButtonWrapper>
        
    )
}