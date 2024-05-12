import * as S from './MainStep2.style';
import HoneyBearMainStep2 from '../../common/HoneyBearMainStep2/HoneyBearMainStep2';
import Calendar from '../../common/Calendar/Calendar';
import DiaryListComponent from '../../common/DiaryListComponent/DiaryListComponent';
// import { HoneyBear } from '../../../pages/MyPage/MyPage.style'

import { clickedDiary } from '../../../recoil/atoms'
import { useRecoilValue } from "recoil";


export default function MainStep2() {
  const diaries = useRecoilValue(clickedDiary);
  return (
    <S.MainStep2Wrapper>
      <S.MainStep2HoneyBearWrapper>
        <HoneyBearMainStep2 />
      </S.MainStep2HoneyBearWrapper>

      {/* honeyBear가 height=50이 가장 커진거라서...ㅜㅜ 재사용하기가 힘듭니다 */}
      {/* <S.MainStep2HoneyBearWrapper>
              <HoneyBear height='50rem' />
            </S.MainStep2HoneyBearWrapper> */}

      <S.MainStep2ComponentWrapper>
        <Calendar />
        {diaries.length > 0 ? (
          diaries.map(item => (
            <DiaryListComponent
              key={item.diaryId}
              feelingListId={item.diaryId}
              feelingListTitle={item.diaryTitle}
              feelingListDate={item.createdDate}
              imageUrl={item.imageUrl}
            />
          ))
        ) : (
          <S.NoDiaryExist>
            아직 작성된 일기가 없습니다.
          </S.NoDiaryExist>
        )}
      </S.MainStep2ComponentWrapper>
    </S.MainStep2Wrapper>
  );
}
