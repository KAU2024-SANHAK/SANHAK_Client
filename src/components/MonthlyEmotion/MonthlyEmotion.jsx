import * as S from "./MonthlyEmotion.style";
import { convertFeelingText } from "../../utils/convertFeelingText";
import FeelingHoneyBear from "../common/HoneyBear/FeelingHoneyBear";
import usePostPlaylist from "../../hooks/queries/main/usePostPlaylist";

function MonthlyEmotion({ firstFeeling, secondFeeling }) {
  const mutation = usePostPlaylist();  

  const handlePlaylist = () => {
    const body = {      
      'month feeling 1': firstFeeling,
      'month feeling 2': secondFeeling,
      
    };
    mutation.mutate(body, {
      onSuccess: (response) => {
        const data = response.data.data;
        console.log(data.playlist_url);
        window.open(`${data.playlist_url}`);
      }
    });
  };

  return (
    <S.Wrapper>
      <S.BubbleText>
        한 달동안 가장 많았던 <br />
        감정들이에요.
      </S.BubbleText>
      <S.HoneyBearWrapper>
        <FeelingHoneyBear 
          feeling={firstFeeling} 
          width='5.6rem'
        />  
      </S.HoneyBearWrapper> 
      <S.Bubble>
        {firstFeeling === null 
          ? 
            '감정 분석 중'
          :
            `${convertFeelingText(firstFeeling)} 
            ${convertFeelingText(secondFeeling)}`          
        }
      </S.Bubble>
      
    </S.Wrapper>
  );
}
export default MonthlyEmotion;