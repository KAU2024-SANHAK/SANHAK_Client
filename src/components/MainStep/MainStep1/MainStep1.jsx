import * as S from './MainStep1.style';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';
import WeatherPlaylist from '../MainStep1/WeatherPlaylist/WeatherPlaylist';

export default function MainStep1() {
  return (
    <S.Main1Wrapper>
      <S.MainButtonWrapper>
        <WeatherPlaylist />
          {/*
          <MyPageButton />
          <SearchByEmotionButton />
          */}
        <ThisMonthEmotion />
      </S.MainButtonWrapper>
        <KakaoAd />
    </S.Main1Wrapper>
  );
}
