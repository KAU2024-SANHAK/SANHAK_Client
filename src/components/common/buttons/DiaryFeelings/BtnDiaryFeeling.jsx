import * as S from './BtnDiaryFeeling.style'

export default function BtnDiaryFeeling({keywords, setKeywords, color, text, value}){
    return(
        <S.DiaryFeelingButtonWrapper type='button' onClick={()=>{ setKeywords(prevFeeling => ({ ...prevFeeling, feeling: value }))  }}>
            <S.FeelingText>{text}</S.FeelingText>
            <S.DiaryFeelingButton color={keywords.feeling === value ? color : 'white'}  />
        </S.DiaryFeelingButtonWrapper>

    )
}