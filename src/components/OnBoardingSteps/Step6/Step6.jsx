import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import HoneyBear from "../../common/HoneyBear/HoneyBear";

export default function Step6(props){
    return (
        <S.Wrapper>
            <OnBoardingProgressbar cur='Step6'/>
            <Title>
                그 날의 너를 기록하다
            </Title>
            <SubTitle>
                지금, 당신의
                꿀 같았던 하루를 담아보세요
            </SubTitle>
            
            <S.Body>
                <HoneyBear/>
            </S.Body>

            <BtnOnBordingNext setStep={props.onNxt}/>
        </S.Wrapper>
    )
}