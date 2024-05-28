import * as S from "./ThisMonthEmotion.style";
import { convertFeelingText } from "../../../../utils/convertFeelingText";
import useGetSummary from "../../../../hooks/queries/main/useGetSummary";
import FeelingHoneyBear from "../../HoneyBear/FeelingHoneyBear";
import usePostPlaylist from "../../../../hooks/queries/main/usePostPlaylist";

export default function ThisMonthEmotion() {
  const { data  } = useGetSummary();
  const firstFeeling = data.data.firstFeeling;
  const secondFeeling = data.data.secondFeeling;
  const mutation = usePostPlaylist();  

  const handlePlaylist = () => {
    const body = {      
      'month feeling 1': firstFeeling,
      'month feeling 2': secondFeeling,
      
    };
    mutation.mutate(body, {
      onSuccess: (response) => {

      }
    });
  };

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
            `${convertFeelingText(firstFeeling)} 
             ${convertFeelingText(secondFeeling)}`          
          }
        </S.ThisMonthEmotionText>
      </S.Bubble>
      
      <S.PlayList
        onClick={() => {
          handlePlaylist();
        }}
      >
        추천 플레이리스트 보러가기
      </S.PlayList>
    </S.Wrapper>
  )
}