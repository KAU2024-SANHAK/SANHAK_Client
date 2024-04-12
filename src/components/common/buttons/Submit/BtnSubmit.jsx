import * as S from './BtnSubmit.style'

export default function BtnSubmit({onClick, height, $color, children}){
    return(
        <S.Wrapper onClick= {onClick} height= {height} $color= {$color}>
            {children}
        </S.Wrapper>
    )
}