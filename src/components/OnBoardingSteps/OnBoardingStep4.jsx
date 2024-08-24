import * as S from './OnBoardingStep.style';
import BtnNext from '../common/buttons/Next/BtnNext';
import Title from './title/Title';
import SubTitle from './title/SubTitle';
import onboardingStep4Webp from '../../assets/img/onboardingStep4.webp';

export default function OnBoardingStep4({ onNext }){
  return (
    <S.OnBoardingStepWrapper>
      <S.OnBoardingTitleWrapper>
        <Title>
          허니베어가 해주는 답장
        </Title>
        <SubTitle>
          허니베어와 함께 당신의 하루를 되돌아 보아요
        </SubTitle>
      </S.OnBoardingTitleWrapper>

      <S.OnBoardingImgWrapper>
        <S.OnBoardingImg src={onboardingStep4Webp}/>
      </S.OnBoardingImgWrapper>

      <S.ButtonField>
        <BtnNext onNext={onNext}/>
      </S.ButtonField>
    </S.OnBoardingStepWrapper>
  );
}