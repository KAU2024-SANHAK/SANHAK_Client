import * as S from "./ThisMonthEmotion.style";
import useGetSummary from "../../../../hooks/queries/main/useGetSummary";

export default function ThisMonthEmotion() {
  const date = new Date();

  const { data, isLoading, isError } = useGetSummary();
  console.log(data);
  
  return (
    <S.Wrapper>
      <S.Boxe/>
      <S.Bubble>
        <S.ThisMonthEmotionText>
        </S.ThisMonthEmotionText>
      </S.Bubble>
      
      <S.PlayList>
        추천 플레이리스트 보러가기
      </S.PlayList>
    </S.Wrapper>
  )
}