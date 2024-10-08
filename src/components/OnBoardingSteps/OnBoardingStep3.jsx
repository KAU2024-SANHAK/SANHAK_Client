import * as S from './OnBoardingStep.style';
import BtnNext from '../common/buttons/Next/BtnNext';
import Title from './title/Title';
import SubTitle from './title/SubTitle';
import onboardingStep3Webp from '../../assets/img/onboardingStep3.webp';

export default function OnBoardingStep3({ onNext }){
  return (
    <S.OnBoardingStepWrapper>
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
        <S.OnBoardingImg src={onboardingStep3Webp}/>
      </S.OnBoardingImgWrapper>

      <S.ButtonField>
        <BtnNext onNext={onNext}/>
      </S.ButtonField>
    </S.OnBoardingStepWrapper>
  );
}