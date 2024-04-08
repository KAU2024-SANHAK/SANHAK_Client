import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step6(props){
    return (
        <S.Wrapper>
            <Title>
                그 날의 너를 기록하다
            </Title>
            
            <S.Body>
                <S.BlankImage/>
                <SubTitle>
                    지금, 당신의 <br/>
                    꿀 같았던 하루를 담아보세요
                </SubTitle>
            </S.Body>
            
            <S.Footer>
                <OnBoardingProgressbar cur='Step6'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Footer>

        </S.Wrapper>
    )
}