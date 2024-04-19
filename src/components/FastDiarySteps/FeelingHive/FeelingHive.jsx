import * as S from './FeelingHive.style'
import { useState } from 'react'
import { IcHoneyPot } from '../../../assets/svg'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'

export default function FeelingHive(){
    const [feeling, setFeeling] =useState()

    return(
        <S.FeelingHiveWrapper>
            <S.FirstLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = 'theme.colors.feeling.happy_yellow' text = '놀람'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '${({ theme }) => theme.colors.feeling.happy_yellow};' text = '평온'/>
            </S.FirstLayer>

            <S.SecondLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFF1A8' text = '기쁨'/>
                <S.HoneyPotWrapper>
                    <IcHoneyPot/>
                </S.HoneyPotWrapper>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#C3C9FF' text = '걱정'/>
            </S.SecondLayer>

            <S.ThirdLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#B4F2FF' text = '슬픔'/>        
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFB6B6' text = '분노'/>
            </S.ThirdLayer>

        </S.FeelingHiveWrapper>
    )
}