import * as S from './BtnHoneyPot.style'

export default function BtnHoneyPot({isClick}){
    return(
        <S.ButtonWrapper>
            {isClick === true ? <S.FilledHoneyPot/> : <S.HoneyPot/>}
        </S.ButtonWrapper>
    )
}