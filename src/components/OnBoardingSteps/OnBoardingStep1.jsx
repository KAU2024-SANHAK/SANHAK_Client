import * as S from './OnBoardingStep.style';
import BtnNext from '../common/buttons/Next/BtnNext';
import Title from './title/Title';
import SubTitle from './title/SubTitle';
import onboardingStep1Webp from '../../assets/img/onboardingStep1.webp';

export default function OnBoardingStep1({ onNext }) {
  return (
    <S.OnBoardingStepWrapper>
      <S.OnBoardingHeader>
        <S.ButtonField>
          <BtnNext
            onNext={() => {
              onNext();
            }}
          />
        </S.ButtonField>
      </S.OnBoardingHeader>

      <S.OnBoardingTitleWrapper>
        <Title>
          당신은
          <br />
          스스로의 감정에 솔직한가요?
        </Title>
        <SubTitle>
          하루하루 스쳐갔던 우리의 감정들 이제
          <br />
          흘려보내지 말고 담아보아요
        </SubTitle>
      </S.OnBoardingTitleWrapper>

      <S.OnBoardingImgWrapper>
        <S.OnBoardingImg src={onboardingStep1Webp} />
      </S.OnBoardingImgWrapper>
    </S.OnBoardingStepWrapper>
  );
}
