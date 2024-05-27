import * as S from "./EmotionType.style";
import { motion } from 'framer-motion';

export default function BtnEmotionType({name,  onClick}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <S.EmotionTypeBtnWrapper onClick = {() => {onClick()}}>
        <S.EmotionTypeBtnText>
            {name}
        </S.EmotionTypeBtnText>
      </S.EmotionTypeBtnWrapper>
    </motion.div>
  )
}