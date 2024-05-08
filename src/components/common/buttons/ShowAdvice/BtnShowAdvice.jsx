import * as S from './BtnShowAdvice.style';

export default function BtnShowAdvice({handleClick, children}){
  return(
    <S.ButtonWrapper onClick={()=>{handleClick()}}>
      <S.RequestReplyViewBtnIcon />
      
      <S.ButtonText>
        {children}
      </S.ButtonText>
    </S.ButtonWrapper>
    
 )
}