import * as S from './Loading.style';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/loadingLottie.json'
const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
      <Lottie 
        animationData = {loadingLottie}
      />
      </S.LottieWrapper>
      <S.Text>불러오는 중...</S.Text>
    </S.LoadingWrapper>
  );
};

export default Loading;
