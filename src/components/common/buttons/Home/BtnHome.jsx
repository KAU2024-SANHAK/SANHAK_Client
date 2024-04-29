import * as S from './BtnHome.style'

export default function BtnHome({onClick}){
    return(
        <S.ButtonWrapper onClick={onClick}>
            <S.HomeButton/>
        </S.ButtonWrapper>
    )
}