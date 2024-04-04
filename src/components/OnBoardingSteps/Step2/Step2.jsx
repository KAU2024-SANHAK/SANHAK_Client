import BtnNext from "../../common/buttons/Next/BtnNext"
import ProgressBar from "../../ProgressBar/PrgoressBar";


export default function Step2(props){
    return (
        <>
            <h1>Step2</h1>
            <ProgressBar cur='Step2'/>

            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}