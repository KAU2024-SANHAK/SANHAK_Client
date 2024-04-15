import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep4Img from '../../../assets/onBoardingStep4.png'

export default function Step4(props){
    return (
        <S.OnBoardingStepWrapper>
            <S.OnBoardingHeader>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
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