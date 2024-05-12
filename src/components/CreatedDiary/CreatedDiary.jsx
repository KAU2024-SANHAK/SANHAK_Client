import * as S from './CreatedDiary.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diaryFeeling, diaryImage } from '../../recoil/atoms';
import { diaryId } from '../../recoil/atoms';
import usePostFeeling from '../../hooks/queries/create/usePostFeeling';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';

export default function CreatedDiary({ title, date, content, id, image }) {
  const navigate = useNavigate();
  const img = useRecoilValue(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const mutation = usePostFeeling();
  const resetDiary = useResetDiary();

  const requestFeeling = () => {
    const body = {
      diaryId: id,
    };
    mutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response.data.feeling)
        setFeeling(response.data.feeling);
        console.log(feeling)
        navigate('/emotionview');
      },
    });
  };

  const responseFeeling = () => {
    navigate('/emotionview');
  };

  const handleClick = () => {
    resetDiary();
    navigate('/main');
  };

  return (
    <S.CreatedDiaryWrapper>
      <S.HeaderWrapper>
        <S.BtnBackWrapper>
          <BtnBack handleClick={handleClick} />
        </S.BtnBackWrapper>
        <S.TodayEmotionBtnWrapper>
          <BtnShowFeeling handleClick={feeling ? responseFeeling : requestFeeling}>
            {feeling ? '오늘의 감정 보러가기' : '오늘의 감정 생성하기'}
          </BtnShowFeeling>
        </S.TodayEmotionBtnWrapper>
      </S.HeaderWrapper>

      <S.CreatedDiaryComponentWrapper>
        <S.DiaryTopTextWrapper>
          <S.DiaryTitle>{title}</S.DiaryTitle>
          <S.DiaryDate>{date}</S.DiaryDate>
        </S.DiaryTopTextWrapper>

        <S.DiaryPhoto src={img} />

        <S.DiaryTextWrapper>
          <S.DiaryText>{content}</S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
