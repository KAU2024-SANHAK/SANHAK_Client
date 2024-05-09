import * as S from "./ThisMonthEmotion.style";
import { convertFeelingText } from "../../../../utils/convertFeelingText";
import useGetSummary from "../../../../hooks/queries/main/useGetSummary";

export default function ThisMonthEmotion() {
  const { data, isLoading, isError } = useGetSummary();
  const firstFeeling = data.data.firstFeeling;
  const secondFeeling = data.data.secondFeeling;
  console.log(data);
  
  return (
    <S.Wrapper>
      <S.Boxe/>
      <S.Bubble>
        <S.ThisMonthEmotionText>
          {firstFeeling === null ? 
            '분석된 감정이 없습니다.'
            :
            {firstFeeling, secondFeeling}
          }
        </S.ThisMonthEmotionText>
      </S.Bubble>
      
      <S.PlayList>
        추천 플레이리스트 보러가기
      </S.PlayList>
    </S.Wrapper>
  )
}