import * as S from './BtnDiaryFeeling.style'
import { useState } from 'react'


export default function BtnDiaryFeeling(props){
    const [color, setColor] =useState('white')

    return(
        <S.DiaryFeelingButtonWrapper onClick={()=>{setColor(props.color)}}>
            <S.DiaryFeelingButton color={color} text={props.text}/>
        </S.DiaryFeelingButtonWrapper>

    )
}