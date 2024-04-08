import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step1(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step1'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Header>

            <Title>
                당신은<br/>
                스스로의 감정에 솔직한가요?
            </Title>
            <SubTitle>
                하루하루 스쳐갔던 우리의 감정들 이제<br/>
                흘려보내지 말고 담아보아요
            </SubTitle>
            <S.Body>
                <S.BlankImage/>
            </S.Body>
            


        </S.Wrapper>

        
    )
}