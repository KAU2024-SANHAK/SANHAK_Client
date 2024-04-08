import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

export default function Step2(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step2'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Header>

            <Title>
                바쁘고 귀찮아...<br/>
                도대체 일기는 언제 쓰지?
                
            </Title>
            <SubTitle>
                    분주한 일상 속, <br/>
                    허니어리에 일기를 채워보세요
            </SubTitle>

            <S.Body>
                <S.BlankImage/> 
            </S.Body>


        </S.Wrapper>
    )
}