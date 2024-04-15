import * as S from './BtnHome.style'

export default function BtnHome({onClick}){
    return(
        <S.Wrapper onClick={onClick}>
            <S.HomeButton/>
        </S.Wrapper>
    )
}