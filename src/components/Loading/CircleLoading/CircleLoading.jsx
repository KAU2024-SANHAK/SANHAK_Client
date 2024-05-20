import * as S from './CircleLoading.style';
import Lottie from 'lottie-react';
import circleLottie from '../../../assets/lottie/circleLottie.json'

export default function CircleLoading({children}){
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie 
          animationData = {circleLottie}
        />
      </S.LottieWrapper>
      <S.Text>
        {children}
      </S.Text>
    </S.LoadingWrapper>
  );
};
