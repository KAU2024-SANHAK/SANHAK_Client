import * as S from './BtnSubmit.style'

export default function BtnSubmit({onClick, width, $color, children, height}){
  return(
    <S.ButtonWrapper 
      onClick = {onClick} 
      width = {width} 
      height = {height}
      $color= {$color}
    >
      {children}
    </S.ButtonWrapper>
  )
}