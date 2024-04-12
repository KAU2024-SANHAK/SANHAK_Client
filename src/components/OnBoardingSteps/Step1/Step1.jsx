import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";
import onBoardingStep1Img from '../../../assets/onBoardingStep1.png'

export default function Step1(props){
    return (
        <S.OnBoardingStepWrapper>

            <S.OnBoardingHeader>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
            </S.OnBoardingHeader>

            <S.OnBoardingTitleWrapper>
                <Title>
                    당신은<br/>
                    스스로의 감정에 솔직한가요?
                </Title>
                <SubTitle>
                    하루하루 스쳐갔던 우리의 감정들 이제<br/>
                    흘려보내지 말고 담아보아요
                </SubTitle>
            </S.OnBoardingTitleWrapper>

            <S.OnBoardingImgWrapper>
                <S.OnBoardingImg src={onBoardingStep1Img}/>
            </S.OnBoardingImgWrapper>
            
        </S.OnBoardingStepWrapper>

        
    )
}