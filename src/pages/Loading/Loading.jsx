import * as S from './Loading.style';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/loadingLottie.json';

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie 
          animationData = {loadingLottie}
        />
      </S.LottieWrapper>

      <S.Text>
        AI가 작동되고 있어요! <br />
        20 ~ 30초 정도 소요됩니다. 잠시만 기다려주세요.
      </S.Text>
    </S.LoadingWrapper>
  );
}

export default Loading;
