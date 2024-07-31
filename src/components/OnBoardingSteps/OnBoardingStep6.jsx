import * as S from './OnBoardingStep.style';
import BtnComplete from '../common/buttons/complete/BtnComplete';
import Title from './title/Title';
import SubTitle from './title/SubTitle';
import HoneyBear from '../common/HoneyBear/HoneyBear';

export default function OnBoardingStep6({ onNext }){
  return (
    <S.OnBoardingStepWrapper>
      <S.OnBoardingTitleWrapper>
        <Title>
          그 날의 너를 기록하다
        </Title>
        <SubTitle>
          지금, 당신의
          꿀 같았던 하루를 담아보세요
        </SubTitle>
      </S.OnBoardingTitleWrapper>

      <S.OnBoardingHoneyBearWrapper>
        <HoneyBear height='50rem'/>   
      </S.OnBoardingHoneyBearWrapper>
              
      <S.OnBoardingFooter>
        <BtnComplete onClick={()=>{onNext()}}>
          지금 시작하기
        </BtnComplete>
      </S.OnBoardingFooter>
    </S.OnBoardingStepWrapper>
  );
}