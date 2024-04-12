import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep3Img from '../../../assets/onBoardingStep3.png'

export default function Step3(props){
    return (
        <S.OnBoardingStepWrapper>
            <S.OnBoardingHeader>
                <OnBoardingProgressbar cur='Step3'/>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
            </S.OnBoardingHeader>

            <S.OnBoardingTitleWrapper>
                <Title>
                    생성형AI를 통한 일기 작성
                </Title>
                <SubTitle>
                    6가지 질문에 답해주세요!<br/>
                    허니베어가 일기를 작성해주고 그려줘요
                </SubTitle>
            </S.OnBoardingTitleWrapper>

            <S.OnBoardingImgWrapper>
                <S.OnBoardingImg src={onBoardingStep3Img}/>
            </S.OnBoardingImgWrapper>

        </S.OnBoardingStepWrapper>
    )
}