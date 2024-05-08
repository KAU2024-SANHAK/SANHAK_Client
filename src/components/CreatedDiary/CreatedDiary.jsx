import * as S from './CreatedDiary.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import ResponseEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/ResponseEmotionViewBtn/ResponseEmotionViewBtn';
import { useRecoilState } from 'recoil';
import { diaryFeeling } from '../../recoil/atoms';
import { diaryId } from '../../recoil/atoms';
import { usePostFeeling } from '../../hooks/queries/create/usePostFeeling';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';

export default function CreatedDiary({ title, date, content }){
    const navigate = useNavigate();
    const [feeling, setFeeling] = useRecoilState(diaryFeeling);
    const resetDiary = useResetDiary();
/*


    const [feeling, setFeeling] = useRecoilState(diaryFeeling);

    const checkFeelingExists = () => {
        return !!feeling;
    }

    useEffect(() => {
        const feelingExists = checkFeelingExists();
        setFeeling(feelingExists);
    }, []);*/

    const requestEmotion = () => {
      //  const responseEmotion = usePostFeeling(diaryId);
    //    setFeeling(responseEmotion);

        navigate('/emotionview');
    }

    const responseEmotion = () => {
        navigate('/emotionview', {state: {value: feeling}});
    }
    const handleClick = () => {
        resetDiary();
        navigate('/main')
    }

    return(
        <S.CreatedDiaryWrapper>
            <S.HeaderWrapper>
                <S.BtnBackWrapper >
                    <BtnBack handleClick={handleClick}/>
                </S.BtnBackWrapper>
                <S.TodayEmotionBtnWrapper>
                    <BtnShowFeeling handleClick = {feeling ? responseEmotion : requestEmotion}>
                        {feeling ? '오늘의 감정 분석 생성하기' : '오늘의 감정 분석 보러가기'}
                    </BtnShowFeeling>
                <ResponseEmotionViewBtn onClick={feeling ? responseEmotion : requestEmotion} />
                 {/*   <ResponseEmotionViewBtn onClick={feeling ? responseEmotion : requestEmotion} />*/}
                </S.TodayEmotionBtnWrapper>
            </S.HeaderWrapper>
            
            <S.CreatedDiaryComponentWrapper>
                <S.DiaryTopTextWrapper>
                    <S.DiaryTitle>
                        {title}
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        {date}
                    </S.DiaryDate>
                </S.DiaryTopTextWrapper>

                <S.DiaryPhotoWrapper/>

                <S.DiaryTextWrapper>
                    <S.DiaryText>
                        {content}
                    </S.DiaryText>
                </S.DiaryTextWrapper>
            </S.CreatedDiaryComponentWrapper>

        </S.CreatedDiaryWrapper>
    )
}