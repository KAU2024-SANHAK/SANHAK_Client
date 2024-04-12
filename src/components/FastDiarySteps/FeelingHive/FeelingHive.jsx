import * as S from './FeelingHive.style'
import { useState } from 'react'
import { IcHoneyPot } from '../../../assets/svg'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'

export default function FeelingHive(){
    const [feeling, setFeeling] =useState()

    return(
        <S.FeelingHiveWrapper>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFF1A8' text = '기쁨'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#B4F2FF' text = '슬픔'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFB6B6' text = '분노'/>
                <IcHoneyPot/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#C3C9FF' text = '걱정'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#B9FFB3' text = '평온'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFCA99' text = '놀람'/>
        </S.FeelingHiveWrapper>
    )
}