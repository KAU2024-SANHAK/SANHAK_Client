import * as S from "./ThisMonthEmotion.style";
import useGetSummary from "../../../../hooks/queries/main/useGetSummary";

export default function ThisMonthEmotion() {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

  const { data, isLoading, isError } = useGetSummary();
  console.log(data);
/* const mutation = usePostSummary();
  console.log(formattedDate);
  mutation.mutate(formattedDate,{
    onSuccess: (response) => {
      console.log(response)
    }
  })*/
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