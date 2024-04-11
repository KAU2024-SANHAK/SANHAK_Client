import * as S from '../FastDiaryStep.style'
import SvgIcHoneyPot from '../../../assets/svg/IcHoneyPot'
import SvgIcQuestion1 from '../../../assets/svg/IcQuestion1'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'

export default function FastDiaryStep1(){
    return(
        <S.StepWrapper>
            <S.QuestionWrapper>
                <SvgIcQuestion1/>
            </S.QuestionWrapper>

            <S.ButtonField>
                <BtnDiaryFeeling color = '#FFF1A8' text = '기쁨'/>
                <BtnDiaryFeeling color = '#B4F2FF' text = '슬픔'/>
                <BtnDiaryFeeling color = '#FFB6B6' text = '분노'/>
                <BtnDiaryFeeling color = '#C3C9FF' text = '걱정'/>
                <BtnDiaryFeeling color = '#B9FFB3' text = '평온'/>
                <BtnDiaryFeeling color = '#FFCA99' text = '놀람'/>

                <SvgIcHoneyPot/>
            </S.ButtonField>

        </S.StepWrapper>
    )
}