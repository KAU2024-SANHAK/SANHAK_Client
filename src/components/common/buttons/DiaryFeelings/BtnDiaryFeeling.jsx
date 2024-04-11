import * as S from './BtnDiaryFeeling.style'

export default function BtnDiaryFeeling(props){
    
    return(
        <S.DiaryFeelingButtonWrapper onClick={()=>{props.setFeeling(props.text)}}>
            <S.DiaryFeelingButton color={props.feeling === props.text ? props.color : 'white'} text={props.text}/>
        </S.DiaryFeelingButtonWrapper>

    )
}