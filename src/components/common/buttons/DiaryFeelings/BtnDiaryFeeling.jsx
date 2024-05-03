import * as S from './BtnDiaryFeeling.style'

export default function BtnDiaryFeeling({feeling, setFeeling, color, text, value}){
    return(
        <S.DiaryFeelingButtonWrapper type='button' onClick={()=>{setFeeling(value)}}>
            <S.FeelingText>{text}</S.FeelingText>
            <S.DiaryFeelingButton color={feeling === value ? color : 'white'}  />
        </S.DiaryFeelingButtonWrapper>

    )
}