import * as S from "./OnBoardingStep.style"
import BtnNext from "../common/buttons/Next/BtnNext"
import Title from "./title/Title";
import SubTitle from "./title/SubTitle";
import onBoardingStep4Img from '../../assets/img/onBoardingStep4.png'

export default function OnBoardingStep4({onNext}){
    return (
        <S.OnBoardingStepWrapper>

            <S.OnBoardingHeader>
                <S.ButtonField>
                    <BtnNext onNext={()=>{onNext()}}/>
                </S.ButtonField>
            </S.OnBoardingHeader>

            <S.OnBoardingTitleWrapper>
                <Title>
                    허니베어가 해주는 답장
                </Title>
                <SubTitle>
                    허니베어와 함께 당신의 하루를 되돌아 보아요
                </SubTitle>
            </S.OnBoardingTitleWrapper>

            <S.OnBoardingImgWrapper>
                <S.OnBoardingImg src={onBoardingStep4Img}/>
            </S.OnBoardingImgWrapper>

        </S.OnBoardingStepWrapper>
    )
}