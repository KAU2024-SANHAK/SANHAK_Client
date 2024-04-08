import * as S from "./OnBoardingProgressBar.style"
import SvgIcProgressCircle from "../../assets/svg/IcProgressCircle"
import SvgIcCurrentProgressCircle from "../../assets/svg/IcCurrentProgressCircle"

export default function OnBoardingProgressBar(props){
    const steps =['Step1', 'Step2', 'Step3', 'Step4', 'Step5', 'Step6']

    return(
        <S.Wrapper>
            
            {steps.map((step, idx)=>(
                props.cur === step ? <SvgIcCurrentProgressCircle key = {idx} /> : <SvgIcProgressCircle key = {idx} />
            ))}

       </S.Wrapper>
    )
}