import BtnNext from "../../common/buttons/Next/BtnNext"

export default function Step4(props){
    return (
        <>
            <h1>Step4</h1>
            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}