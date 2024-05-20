import * as S from './MainStep1.style';
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton';
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton';
import HoneyBearMainStep1 from '../../common/HoneyBearMainStep1/HoneyBearMainStep1';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';

export default function MainStep1() {
  return (
    <S.MainStep1Wrapper>
      <S.MainStep1HoneyBearWrapper>
        <HoneyBearMainStep1 />
      </S.MainStep1HoneyBearWrapper>

      <S.MainButtonWrapper>
        <MyPageButton />
        <SearchByEmotionButton />
        <ThisMonthEmotion />
      </S.MainButtonWrapper>
      <KakaoAd />
    </S.MainStep1Wrapper>
  );
}
