import * as S from "./ThisMonthEmotion.style";
import { convertFeelingText } from "../../../../utils/convertFeelingText";
import useGetSummary from "../../../../hooks/queries/main/useGetSummary";
import FeelingHoneyBear from "../../HoneyBear/FeelingHoneyBear";

export default function ThisMonthEmotion() {
  const { data, isLoading, isError } = useGetSummary();
  //진학이가 감정 수정하면 convert 진행
  const firstFeeling = data.data.firstFeeling;
  const secondFeeling = data.data.secondFeeling;
  console.log(data);
  
  return (
    <S.Wrapper>
      <S.HoneyBearWrapper>
        <FeelingHoneyBear 
          feeling={firstFeeling} 
          width='5.6rem'
        />  
      </S.HoneyBearWrapper> 
      <S.Bubble>
        <S.ThisMonthEmotionText>
          {firstFeeling === null ? 
            '감정 분석 중'
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