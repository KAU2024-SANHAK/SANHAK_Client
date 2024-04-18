import * as S from './BtnComplete.style'

export default function BtnComplete({onClick, children}){
    return(
        <S.Wrapper onClick={onClick}>
            {children}
        </S.Wrapper>
    )
}