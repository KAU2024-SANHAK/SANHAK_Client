import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep2Img from '../../../assets/onBoardingStep2.png'

export default function Step2(props){
    return (
        <S.OnBoardingStepWrapper>
            <S.OnBoardingHeader>
                <OnBoardingProgressbar cur='Step2'/>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
            </S.OnBoardingHeader>

            <Title>
                바쁘고 귀찮아...<br/>
                도대체 일기는 언제 쓰지?               
            </Title>
            <SubTitle>
                    분주한 일상 속, <br/>
                    허니어리에 일기를 채워보세요
            </SubTitle>

            <S.OnBoardingBody>
                <S.OnBoardingImgWrapper src={onBoardingStep2Img}/>
            </S.OnBoardingBody>


        </S.OnBoardingStepWrapper>
    )
}