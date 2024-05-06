import * as S from "./EmotionType.style";

export default function BtnEmotionType({name,  onClick}) {
  return (
    <S.EmotionTypeBtnWrapper onClick = {() => {onClick()}}>
      <S.EmotionTypeBtnText>
          {name}
      </S.EmotionTypeBtnText>
    </S.EmotionTypeBtnWrapper>
  )
}