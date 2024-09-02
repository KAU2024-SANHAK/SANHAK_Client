import * as S from './CalendarPage.style';
import { clickedDiary } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { format } from 'date-fns';
import Calendar from '../../components/common/Calendar/Calendar';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';
import CreateDiaryButtonField from '../../components/CreateDiaryButtonField/CreateDiaryButtonField';

function CalendarPage() {
  const diaries = useRecoilValue(clickedDiary);

  return(
    <S.CalendarPageWrapper>
      <S.CalendarWrapper>
        <Calendar />
      </S.CalendarWrapper>
      {diaries.length > 0 
        ? (
            diaries.map(item => (
              <DiaryListComponent
                key={item.diaryId}
                feelingListId={item.diaryId}
                feelingListTitle={item.diaryTitle}
                feelingListDate={format(new Date(item.createdDate), "yyyy년 M월 d일")}
                imageUrl={item.imageUrl}
              />
            ))
          ) 
        : (
            <S.ErrorBox>
              아직 작성된 일기가 없습니다.
            </S.ErrorBox>
          )
      }
      <CreateDiaryButtonField />
    </S.CalendarPageWrapper>
  );
}
export default CalendarPage;