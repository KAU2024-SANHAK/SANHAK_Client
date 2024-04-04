import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import * as S from "./Step1.style"

export default function Step1(props){
    return (
        <>
            <p>당신의 성격 1</p>
            <ProgressBar cur='Step1'/>
            <BtnNext setStep={props.onNxt}></BtnNext>
        </>

        
    )
}