import * as S from './MainStep1.style';
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton';
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton';
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion';
import KakaoAd from '../../KakaoAd/KakaoAd';
import { motion } from 'framer-motion';

export default function MainStep1() {
  return (
    <S.Main1Wrapper>
      <S.MainStep1Wrapper>

        <S.MainButtonWrapper>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <MyPageButton />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <SearchByEmotionButton />
          </motion.div>
          <ThisMonthEmotion />
        </S.MainButtonWrapper>
        <KakaoAd />
      </S.MainStep1Wrapper>
    </S.Main1Wrapper>
    
  );
}
