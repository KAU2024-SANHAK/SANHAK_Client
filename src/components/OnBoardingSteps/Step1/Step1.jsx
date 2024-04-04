import BtnNext from "../../common/buttons/Next/BtnNext";

export default function Step1(props){
    return (
        <>
            <h1>Step1</h1>
            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}