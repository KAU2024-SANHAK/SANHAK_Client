import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import BtnSetWritingStyle from "../../common/buttons/SetWritingStyleButton.jsx/BtnSetWritingStyle";
import * as S from "../Step.style"
import SetWritingStyle from "../SetWriitingStyle/SetWritingStyle";
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import Caption from "../title/Caption";

export default function Step5(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step5'/>         
            </S.Header>
            
            <Title>
                어떤 스타일의
                글을 원하나요?
            </Title>

            <S.Body>
                <SetWritingStyle/>
                <Caption>'빠른 일기'는 간단한 6가지 질문을 통해 사용자의 하루를 파악하고</Caption>
                <Caption>생성형 AI를 통해 글과 사진이 포함된 일기를 작성합니다.</Caption>
                <Caption>'느린 일기'는 사용자가 직접 글을 작성하고 사진을 첨부합니다.</Caption>
            </S.Body>

            <S.Footer>
                <Caption>일기 작성 페이지는 마이페이지에서 수정 가능합니다.</Caption>
                <BtnSetWritingStyle setStep={props.onNxt}/>
            </S.Footer>
        </S.Wrapper>
    )
}