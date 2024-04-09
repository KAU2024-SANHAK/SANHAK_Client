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
            <S.Header>
                <OnBoardingProgressbar cur='Step5'/>         
            </S.Header>
            
            <Title>
                어떤 스타일의<br/>
                일기를 원하나요?
            </Title>

            <S.Body>
                <SetWritingStyle/>
                
            </S.Body>
            <S.Footer>
                <p>일기 작성 페이지는 마이페이지에서 수정 가능합니다.</p>
                <BtnSetWritingStyle setStep={props.onNxt}/>
            </S.Footer>
        </S.Wrapper>
    )
}