import * as S from "../OnBoardingStep.style"
import BtnNext from "../../common/buttons/Next/BtnNext"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep2Img from '../../../assets/img/onBoardingStep2.png'

export default function OnBoardingStep2({onNext}){
    return (
        <S.OnBoardingStepWrapper>

            <S.OnBoardingHeader>
                <S.ButtonField>
                    <BtnNext onNext={()=>{onNext()}}/>
                </S.ButtonField>
            </S.OnBoardingHeader>

            <S.OnBoardingTitleWrapper>
            <Title>
                바쁘고 귀찮아...<br/>
                도대체 일기는 언제 쓰지?               
            </Title>
            <SubTitle>
                    분주한 일상 속, <br/>
                    허니어리에 일기를 채워보세요
            </SubTitle>
            </S.OnBoardingTitleWrapper>

            <S.OnBoardingImgWrapper>
                <S.OnBoardingImg src={onBoardingStep2Img}/>
            </S.OnBoardingImgWrapper>


        </S.OnBoardingStepWrapper>
    )
}