import * as S from "./OnBoardingProgressBar.style"
import SvgIcProgressCircle from "../../assets/svg/IcProgressCircle"
import SvgIcCurrentProgressCircle from "../../assets/svg/IcCurrentProgressCircle"

export default function MainProgressBar(props){
    const steps =['Step1', 'Step2']

    return(
        <S.Wrapper>
            
            {steps.map((step, idx)=>(
                props.cur === step ? <SvgIcCurrentProgressCircle key = {idx} /> : <SvgIcProgressCircle key = {idx} />
            ))}

       </S.Wrapper>
    )
}