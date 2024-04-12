import * as S from "./StepProgress.style"
import SvgIcProgressCircle from "../../../assets/svg/IcProgressCircle"
import SvgIcCurrentProgressCircle from "../../../assets/svg/IcCurrentProgressCircle"

export default function StepProgress({steps, cur}){

    return(
        <S.Wrapper>
            
            {steps.map((step, idx)=>(
                cur === step.name ? <SvgIcCurrentProgressCircle key = {idx} /> : <SvgIcProgressCircle key = {idx} />
            ))}

       </S.Wrapper>
    )
}