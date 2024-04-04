import BtnNext from "../../common/buttons/Next/BtnNext"

export default function Step3(props){
    return (
        <>
            <h1>Step3</h1>
            <BtnNext setStep={props.onNxt}></BtnNext>
        </>
    )
}