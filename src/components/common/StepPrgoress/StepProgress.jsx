import * as S from "./StepProgress.style"
import { IcCurrentProgressCircle, IcProgressCircle} from "../../../assets/svg"

export default function StepProgress({steps, cur}){

    return(
        <S.Wrapper>
            
            {steps.map((step, idx)=>(
                cur === step.name ? <IcCurrentProgressCircle key = {idx} /> : <IcProgressCircle key = {idx} />
            ))}

       </S.Wrapper>
    )
}