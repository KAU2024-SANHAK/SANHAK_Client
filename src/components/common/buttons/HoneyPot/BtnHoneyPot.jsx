import * as S from './BtnHoneyPot.style'

export default function BtnHoneyPot({feeling, setFeeling, value}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>{setFeeling(value)}}>
            {feeling === 'NONE' ? <S.FilledHoneyPot/> : <S.HoneyPot/>}
        </S.ButtonWrapper>
    )
}