import * as S from './MainStep1.style';
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton';
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';
import { motion } from 'framer-motion';
import useGetWeather from '../../../hooks/queries/main/useGetWeather';

export default function MainStep1() {
  const data = useGetWeather();
  console.log(data);
  
  return (
    <S.Main1Wrapper>
      <S.MainStep1Wrapper>
        <S.MainButtonWrapper>
            
            <MyPageButton />
            <SearchByEmotionButton />
            <ThisMonthEmotion />
        </S.MainButtonWrapper>
        <KakaoAd />
      </S.MainStep1Wrapper>
    </S.Main1Wrapper>
  );
}
