import * as S from "../Step.style"
import BtnNext from "../../common/buttons/Next/BtnNext"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep3Img from '../../../assets/onBoardingStep3.png'

export default function Step3({onNext}){
    return (
        <S.OnBoardingStepWrapper>

            <S.OnBoardingHeader>
                <S.BtnWrapper>
                    <BtnNext onNext={()=>{onNext()}}/>
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