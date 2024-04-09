import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step3(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step3'/>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
            </S.Header>

            <Title>
                생성형AI를 통한 일기 작성
            </Title>
            <SubTitle>
                6가지 질문에 답해주세요!<br/>
                허니베어가 일기를 작성해주고 그려줘요
            </SubTitle>

            <S.Body>
                <S.BlankImage/>
            </S.Body>

        </S.Wrapper>
    )
}