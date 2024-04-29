import * as S from './BtnSubmit.style'

export default function BtnSubmit({onClick, width, $color, children}){
    return(
        <S.ButtonWrapper onClick= {onClick} width= {width} $color= {$color}>
            {children}
        </S.ButtonWrapper>
    )
}