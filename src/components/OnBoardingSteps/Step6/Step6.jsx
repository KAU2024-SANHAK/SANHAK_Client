import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBoardingStart from "../../common/buttons/OnBoardingStartButton/BtnOnBoardingStart";
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import HoneyBear from "../../common/HoneyBear/HoneyBear";

export default function Step6(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step6'/>
            </S.Header>
            
            <Title>
                그 날의 너를 기록하다
            </Title>
            <SubTitle>
                지금, 당신의
                꿀 같았던 하루를 담아보세요
            </SubTitle>
            
            <S.Body>
                <HoneyBear width='375' height='496'/>
            </S.Body>
            
            <S.Footer>
                <BtnOnBoardingStart setStep={props.onNxt}/>
            </S.Footer>
        </S.Wrapper>
    )
}