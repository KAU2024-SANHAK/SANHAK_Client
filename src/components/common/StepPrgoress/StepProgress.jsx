import * as S from "./StepProgress.style"
import SvgIcProgressCircle from "../../../assets/svg/IcProgressCircle"
import SvgIcCurrentProgressCircle from "../../../assets/svg/IcCurrentProgressCircle"

//props 값에 따라 circle의 수를 조절할 수 있습니다.
//merge 정리 되면 OnBoardingPrgoress 삭제후 해당 컴포넌트로 통합하겠습니다.

export default function StepProgress(props){

    return(
        <S.Wrapper>
            
            {props.steps.map((step, idx)=>(
                props.cur === step ? <SvgIcCurrentProgressCircle key = {idx} /> : <SvgIcProgressCircle key = {idx} />
            ))}

       </S.Wrapper>
    )
}