import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import BtnSetWritingStyle from "../../common/buttons/SetWritingStyleButton.jsx/BtnSetWritingStyle";
import * as S from "../Step.style"
import SetWritingStyle from "../SetWriitingStyle/SetWritingStyle";
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step5(props){
    return (
        <S.Wrapper>

            <OnBoardingProgressbar cur='Step5'/>
            
            <Title>
                어떤 스타일의<br/>
                일기를 원하나요?
            </Title>

            <S.Body>
                <SetWritingStyle/>
                <p></p>
            </S.Body>

            <BtnSetWritingStyle setStep={props.onNxt}/>
        </S.Wrapper>
    )
}