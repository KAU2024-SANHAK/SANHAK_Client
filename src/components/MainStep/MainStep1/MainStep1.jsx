import * as S from './MainStep1.style';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';
import WeatherPlaylist from '../MainStep1/WeatherPlaylist/WeatherPlaylist';
import MenuHeader from '../../MenuHeader/MenuHeader';

export default function MainStep1() {
  return (
    <S.Main1Wrapper>
      <MenuHeader />
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
