import BtnNext from "../../common/buttons/Next/BtnNext"
import ProgressBar from "../../ProgressBar/PrgoressBar";


export default function Step4(props){
    return (
        <>
            <h1>Step4</h1>
            <ProgressBar cur='Step4'/>

            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}