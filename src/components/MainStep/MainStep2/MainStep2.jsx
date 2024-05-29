import React from "react";
import { format } from "date-fns"; // date-fns에서 format 함수를 가져옵니다.
import * as S from './MainStep2.style';
import Calendar from '../../common/Calendar/Calendar';
import DiaryListComponent from '../../common/DiaryListComponent/DiaryListComponent';

import { clickedDiary } from '../../../recoil/atoms'
import { useRecoilValue } from "recoil";

export default function MainStep2() {
  const diaries = useRecoilValue(clickedDiary);

  const parseQuotes = (text) => {
    if(text[0] === '"'){
      return text.substring(1, text.length-1);
    }
    else{
      return text;
    }
  };
  
  return (
    <S.Main2Wrapper>
      <S.MainStep2Wrapper>

        <S.MainStep2ComponentWrapper>
          <Calendar />
          {diaries.length > 0 ? (
            diaries.map(item => (
              <DiaryListComponent
                key={item.diaryId}
                feelingListId={item.diaryId}
                feelingListTitle={parseQuotes(item.diaryTitle)}
                feelingListDate={format(new Date(item.createdDate), "yyyy년 M월 d일")}
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
    </S.Main2Wrapper>
    
  );
}
