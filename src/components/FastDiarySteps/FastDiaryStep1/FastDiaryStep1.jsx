import * as S from '../FastDiaryStep.style'
import SvgIcHoneyPot from '../../../assets/svg/IcHoneyPot'
import SvgIcQuestion1 from '../../../assets/svg/IcQuestion1'
import { IcDiaryFeeling } from '../../../assets/svg'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'

export default function FastDiaryStep1(){
    return(
        <S.StepWrapper>
            <S.QuestionWrapper>
                <SvgIcQuestion1/>
            </S.QuestionWrapper>
            <S.ButtonField>
                <BtnDiaryFeeling color = '#FFF1A8' text = '기쁨'/>
                <SvgIcHoneyPot/>
            </S.ButtonField>

        </S.StepWrapper>
    )
}