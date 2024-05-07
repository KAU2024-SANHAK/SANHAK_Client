// 이 파일에서는 useEffect로 감정이 있는지 확인하고, 감정이 있다면 ResponseEmotionViewBtn 버튼에
// responseEmotion 핸들러를 연결하고, 없다면 requestEmotion핸들러를 연결하여 리코일에 저장하고 비동기처리한다.

import * as S from './CreatedDiary.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import ResponseEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/ResponseEmotionViewBtn/ResponseEmotionViewBtn';

// Real: recoil에서 atom 가져오기
// import { useRecoilState } from 'recoil';
// import { diaryFeeling } from '../../recoil/atoms';
// import { diaryId } from '../../recoil/atoms';

// import { usePostFeeling } from '../../hooks/queries/create/usePostFeeling';

export default function CreatedDiary({ title, date, content }){

    const navigate = useNavigate();

    // REAL: API 연결후 코드 돌리기
    // **********************************************************
    // const [feeling, setFeeling] = useRecoilState(diaryFeeling);

    // data에 feeling이 존재하는 지 여부 확인하기
    // const checkFeelingExists = () => {
    //     return !!feeling;
    // }

    // const setFeeling = (feel) => {
    //     feeling.set(feel);
    // }

    // feeling이 있는지 확인하여 useEffect로 렌더링
    // useEffect(() => {
    //     const feelingExists = checkFeelingExists();
    //     setFeeling(feelingExists);
    // }, []);

    // const requestEmotion = () => {
    //     const responseEmotion = usePostFeeling(diaryId);
    //     setFeeling(responseEmotion);

    //     navigate('/emotionview');
    // }
    // **********************************************************

    const responseEmotion = () => {
        navigate('/emotionview');
    }
    const handleClick = () => {
        navigate('/main')
    }

    return(
        <S.CreatedDiaryWrapper>
            <S.HeaderWrapper>
                <S.BtnBackWrapper onClick={handleClick}>
                    <BtnBack/>
                </S.BtnBackWrapper>
                <S.TodayEmotionBtnWrapper>
                    {/* TEST: API 연결 전 실행 */}
                    <ResponseEmotionViewBtn onClick={responseEmotion} />

                    {/* REAL: API 연결 시에 */}
                    {/* <ResponseEmotionViewBtn onClick={feeling ? responseEmotion : requestEmotion} /> */}
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