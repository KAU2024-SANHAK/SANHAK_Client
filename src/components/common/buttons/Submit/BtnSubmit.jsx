import * as S from './BtnSubmit.style'

export default function BtnSubmit({onClick, height, $color, children}){
    return(
        <S.ButtonWrapper onClick= {onClick} height= {height} $color= {$color}>
            {children}
        </S.ButtonWrapper>
    )
}