import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step4(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step4'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Header>

            <Title>
                허니베어가 해주는 답장
            </Title>
            <SubTitle>
                허니베어와 함께<br/>
                당신의 하루를 되돌아 보아요
            </SubTitle>

            <S.Body>
                <S.BlankImage/>

            </S.Body>

        </S.Wrapper>
    )
}