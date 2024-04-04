import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import * as S from "./Step1.style"

export default function Step1(props){
    return (
        <S.Wrapper>
            <p>당신의 성격 </p>

            <S.Footer>
                <ProgressBar cur='Step1'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>

        
    )
}