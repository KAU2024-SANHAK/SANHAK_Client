import * as S from './BtnDiaryFeeling.style'

export default function BtnDiaryFeeling({feeling, setFeeling, color, text}){
    return(
        <S.DiaryFeelingButtonWrapper type='button' onClick={()=>{setFeeling(text)}}>
            <S.DiaryFeelingButton color={feeling === text ? color : 'white'} text={text}/>
        </S.DiaryFeelingButtonWrapper>

    )
}