import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import SetWritingStyle from "../SetWriitingStyle/SetWritingStyle";
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step5(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step5'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Header>
            
            <Title>
                어떤 스타일의<br/>
                일기를 원하나요?
            </Title>

            <S.Body>
                <SetWritingStyle></SetWritingStyle>
            </S.Body>

        </S.Wrapper>
    )
}