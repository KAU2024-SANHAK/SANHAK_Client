import * as S from './AdviceLoading.style';
import Lottie from 'lottie-react';
import adviceLottie from '../../../assets/lottie/adviceLottie.json'

export default function AdviceLoading(){
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie 
          animationData = {adviceLottie}
        />
      </S.LottieWrapper>
      <S.Text>조언을 생성 중입니다</S.Text>
    </S.LoadingWrapper>
  );
};
