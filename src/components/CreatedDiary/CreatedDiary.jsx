import * as S from './CreatedDiary.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diaryFeeling, diaryImage } from '../../recoil/atoms';
import usePostFeeling from '../../hooks/queries/create/usePostFeeling';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';
import Loading from '../../pages/Loading/Loading';
import Menu from '../common/buttons/Menu/Menu';
import Share from '../common/buttons/Share/Share';

export default function CreatedDiary({ title, date, content, id }) {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const isFeeling = feeling !== 'NONE' && feeling !== '';
  const [image, setImage] = useRecoilState(diaryImage)
  const isImage = image !== null && image !== "";
  const mutation = usePostFeeling();
  const {resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage} = useResetDiary();

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

  const handleBack = () => {
    resetAdvice();
    resetContent();
    resetTitle();
    resetFeeling();
    resetId();
    resetImage();
    navigate('/main');
  };

  const createImg = () => {
    // 클릭시 ai 연결해서 이미지 생성하기

    // 리코일에 이미지 저장하기
  }

  if(mutation.isPending){
    return <Loading />
  }
  return (
    <S.CreatedDiaryWrapper>
      <S.HeaderWrapper>
        <S.BtnBackWrapper>
          <BtnBack handleClick={handleBack} />
        </S.BtnBackWrapper>
        <S.ExtraBtnWrapper>
        <Share />
        <Menu id={id} />
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
       
        {isImage ? <S.DiaryPhoto src={image} />
        :
        <S.ImageBtnWrapper handleClick={createImg}>
          <S.ImageBtn />
        </S.ImageBtnWrapper>}

        <S.DiaryTextWrapper>
          <S.DiaryText>{content}</S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
