import * as S from "./DiaryListComponent.style"
import { useNavigate } from "react-router-dom"
import { usePostDiary } from "../../../hooks/queries/etc/usePostDiary";
import BtnSubmit from "../buttons/Submit/BtnSubmit";

export default function DiaryListComponent({ keys, feelingListId, feelingListTitle, feelingListDate }) {
  const navigate=useNavigate();

  const handleSearchButton=() =>{
    const responseObject = usePostDiary(diaryId={feelingListId})
    navigate('/diaryview')
  }

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
