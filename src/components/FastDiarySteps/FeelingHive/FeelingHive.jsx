import * as S from './FeelingHive.style'
import { useRecoilState } from 'recoil'
import { feelingKeyword } from '../../../recoil/atoms'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'
import BtnHoneyPot from '../../common/buttons/HoneyPot/BtnHoneyPot'

export default function FeelingHive(){
    const [feeling, setFeeling] = useRecoilState(feelingKeyword)
    return( 
        <S.FeelingHiveWrapper>
            <S.FirstLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFCA99' text = '놀람' value ='SURPRISED'/>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#B9FFB3' text = '평온' value ='RELAX'/>
            </S.FirstLayer>

            <S.SecondLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFF1A8' text = '기쁨' value ='HAPPY'/>
                <S.HoneyPotWrapper>
                    <BtnHoneyPot feeling = {feeling} setFeeling = {setFeeling} value = 'NONE'/>
                </S.HoneyPotWrapper>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#C3C9FF' text = '걱정' value ='WORRIED'/>
            </S.SecondLayer>

            <S.ThirdLayer>
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#B4F2FF' text = '슬픔' value ='SAD'/>        
                <BtnDiaryFeeling feeling = {feeling} setFeeling = {setFeeling} color = '#FFB6B6' text = '분노' value ='ANGRY'/>
            </S.ThirdLayer>

        </S.FeelingHiveWrapper>
    )
}