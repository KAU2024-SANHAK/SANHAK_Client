import BtnNext from "../../common/buttons/Next/BtnNext"

export default function Step2(props){
    return (
        <>
            <h1>Step2</h1>
            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}