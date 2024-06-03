import * as S from './MainStep1.style';
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton';
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';
import WeatherPlaylist from '../MainStep1/WeatherPlaylist/WeatherPlaylist';
import { motion } from 'framer-motion';

export default function MainStep1() {
  return (
    <S.Main1Wrapper>
      <S.MainStep1Wrapper>
        <S.MainButtonWrapper>
            <WeatherPlaylist />
            <MyPageButton />
            <SearchByEmotionButton />
            <ThisMonthEmotion />
        </S.MainButtonWrapper>
        <KakaoAd />
      </S.MainStep1Wrapper>
    </S.Main1Wrapper>
  );
}
