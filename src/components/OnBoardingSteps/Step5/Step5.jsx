import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnSetWritingStyle from "../../common/buttons/SetWritingStyleButton.jsx/BtnSetWritingStyle";
import * as S from "../Step.style"
import SetWritingStyle from "../SetWriitingStyle/SetWritingStyle";
import Title from "../title/Title";
import Caption from "../title/Caption";

export default function Step5(props){
    return (
        <S.OnBoardingStepWrapper>
            <S.OnBoardingHeader>
                <OnBoardingProgressbar cur='Step5'/>         
            </S.OnBoardingHeader>
            
            <Title>
                어떤 스타일의
                글을 원하나요?
            </Title>

            <S.OnBoardingBody>
                <SetWritingStyle/>
                <Caption>'빠른 일기'는 간단한 6가지 질문을 통해 사용자의 하루를 파악하고</Caption>
                <Caption>생성형 AI를 통해 글과 사진이 포함된 일기를 작성합니다.</Caption>
                <Caption>'느린 일기'는 사용자가 직접 글을 작성하고 사진을 첨부합니다.</Caption>
            </S.OnBoardingBody>

            <S.OnBoardingFooter>
                <Caption>일기 작성 페이지는 마이페이지에서 수정 가능합니다.</Caption>
                <BtnSetWritingStyle setStep={props.onNxt}/>
            </S.OnBoardingFooter>
        </S.OnBoardingStepWrapper>
    )
}