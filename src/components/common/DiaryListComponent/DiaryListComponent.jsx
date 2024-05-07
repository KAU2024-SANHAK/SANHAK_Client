import * as S from "./DiaryListComponent.style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { diaryContent, diaryAdvice, diaryTitle, diaryImage, diaryFeeling, createdDate } from "../../../recoil/atoms";
import usePostDiary from "../../../hooks/queries/etc/usePostDiary";
import BtnSubmit from "../buttons/Submit/BtnSubmit";

export default function DiaryListComponent({ feelingListId, feelingListTitle, feelingListDate }) {
  //이거랑 다른 부분들 꼭 hooks로 빼서 코드 정리하기 꼭
  const [content, setContent] = useRecoilState(diaryContent);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  const [title, settitle] = useRecoilState(diaryTitle);
  const [image, setImage] = useRecoilState(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const [date, setDate] = useRecoilState(createdDate);

  const mutation = usePostDiary();
  const navigate = useNavigate();

  const handleSearchButton= () => {
    const body = {
      diaryId: feelingListId, 
    };

    mutation.mutate(body,{
      onSuccess: (response) => {
        const data = response.data;
        console.log(response);
        setAdvice(data.advice);
        setContent(data.diary_content);
        setDate(data.createdDate);
        setFeeling(data.feeling);
        setImage(data.imageUrl);
        settitle(data.diaryTitle);
        navigate('/diaryview');
      }

    });
  };

  return (
    <S.DiaryListComponentWrapper>
      <S.Image />
      
      <S.TextWrapper>
        <S.TextTitle>
          {feelingListTitle}
        </S.TextTitle>
        <S.TextDate>
          {feelingListDate}
        </S.TextDate>

        <BtnSubmit
          onClick = {() => {
            handleSearchButton();
          }}
          width = '18.5rem'
          height = '4rem'
          $color={({ theme }) => theme.colors.pink.red_pink}
        >
          조회하기
        </BtnSubmit>

      </S.TextWrapper>
    </S.DiaryListComponentWrapper>
  )
}
