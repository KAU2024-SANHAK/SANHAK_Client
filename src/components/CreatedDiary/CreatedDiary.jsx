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
import Loading from '../../pages/Loading/Loading';
import Menu from '../common/buttons/Menu/Menu';
import Share from '../common/buttons/Share/Share';

export default function CreatedDiary({ title, date, content, id, image }) {
  const navigate = useNavigate();
  const img = useRecoilValue(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const isFeeling = feeling !== 'NONE' && feeling !== '';
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

  if(mutation.isPending){
    return <Loading />
  }
  return (
    <S.CreatedDiaryWrapper>
      <S.HeaderWrapper>
        <S.BtnBackWrapper>
          <BtnBack handleClick={handleClick} />
        </S.BtnBackWrapper>
        <S.ExtraBtnWrapper>
        <Share />
        <Menu diaryId={id}/>
      </S.ExtraBtnWrapper>
      </S.HeaderWrapper>

      <S.CreatedDiaryComponentWrapper>
        <S.DiaryTopTextWrapper>
          <S.DiaryTitle>{title}</S.DiaryTitle>
          <S.DiaryTopInfoWrapper>
            <S.DiaryDate>{date}</S.DiaryDate>
            <S.TodayEmotionBtnWrapper>
              <BtnShowFeeling handleClick={isFeeling ? responseFeeling : requestFeeling}>
                {isFeeling ? '오늘의 감정 보러가기' : '오늘의 감정 생성하기'}
              </BtnShowFeeling>
            </S.TodayEmotionBtnWrapper>
          </S.DiaryTopInfoWrapper>
          
          
        </S.DiaryTopTextWrapper>

        <S.DiaryPhoto src={img} />

        <S.DiaryTextWrapper>
          <S.DiaryText>{content}</S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
