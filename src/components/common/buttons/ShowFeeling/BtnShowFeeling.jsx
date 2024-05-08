import * as S from './BtnShowFeeling.style'

export default function BtnShowFeeling({handleClick, children}){
  return(
    <S.ButtonWrapper onClick = {() => {
      handleClick();
    }}
    >
      <S.ButtonText>
        {children}
      </S.ButtonText>
      <S.TT>
        &gt;
      </S.TT>
    </S.ButtonWrapper>
  )
}