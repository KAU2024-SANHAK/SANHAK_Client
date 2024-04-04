import BtnNext from "../../common/buttons/Next/BtnNext"
import ProgressBar from "../../ProgressBar/PrgoressBar";


export default function Step3(props){
    return (
        <>
            <h1>Step3</h1>
            <ProgressBar cur='Step3'/>

            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}