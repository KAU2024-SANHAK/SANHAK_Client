import * as S from '../FastDiaryStep.style'
import SvgIcHappyHoney from "../../../assets/svg/IcHappyHoney"
import SvgIcAngryHoney from '../../../assets/svg/IcAngryHoney'
import SvgIcSadHoney from '../../../assets/svg/IcSadHoney'
import SvgIcWorryHoney from '../../../assets/svg/IcWorryHoney'
import SvgIcRelaxHoney from '../../../assets/svg/IcRelaxHoney'
import SvgIcSurpriseHoney from '../../../assets/svg/IcSurpriseHoney'
import SvgIcHoneyPot from '../../../assets/svg/IcHoneyPot'
import SvgIcQuestion1 from '../../../assets/svg/IcQuestion1'

export default function FastDiaryStep1(){
    return(
        <S.StepWrapper>
            <S.QuestionWrapper>
                <SvgIcQuestion1/>
            </S.QuestionWrapper>
            <S.ButtonField>
                <SvgIcHappyHoney/>
                <SvgIcAngryHoney/>
                <SvgIcSadHoney/>
                <SvgIcWorryHoney/>
                <SvgIcSurpriseHoney/>
                <SvgIcRelaxHoney/>
                <SvgIcHoneyPot/>
            </S.ButtonField>

        </S.StepWrapper>
    )
}