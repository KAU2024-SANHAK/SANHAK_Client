import * as S from "./OnBoardingProgressBar.style"
import SvgIcProgressCircle from "../../assets/svg/IcProgressCircle"
import SvgIcCurrentProgressCircle from "../../assets/svg/IcCurrentProgressCircle"
export default function ProgressBar(props){
    return(
        <S.Wrapper>
            {props.cur == 'Step1' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
            {props.cur == 'Step2' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
            {props.cur == 'Step3' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
            {props.cur == 'Step4' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
            {props.cur == 'Step5' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
            {props.cur == 'Step6' ?<SvgIcCurrentProgressCircle/> : <SvgIcProgressCircle/>}
       </S.Wrapper>
    )
}