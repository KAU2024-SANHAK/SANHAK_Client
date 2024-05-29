import * as S from "./EmotionType.style";

export default function BtnEmotionType({name,  onClick}) {
  return (
    <S.ClickedWrapper
      whileTap={{ scale: 0.9, backgroundColor: '#FFFFFF'}}
      transition={{ duration: 0.3 }}
    >
      <S.EmotionTypeBtnWrapper onClick = {() => {onClick()}}>
        <S.EmotionTypeBtnText>
            {name}
        </S.EmotionTypeBtnText>
      </S.EmotionTypeBtnWrapper>
    </S.ClickedWrapper>
  )
}