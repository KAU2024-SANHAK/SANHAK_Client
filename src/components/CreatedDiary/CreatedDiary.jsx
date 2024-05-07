// 여기서 ResponseEmotionViewBtn 버튼 누르면 감정 있는지 확인하고 있으면 그냥 넘기고, 없으면 postFeeling하고 리코일에 저장하기 (페이지 전환)

import * as S from './CreatedDiary.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponseEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/ResponseEmotionViewBtn/ResponseEmotionViewBtn';
// import { useRecoilState } from 'recoil';

// API 연결 시 활성화할 부분
import { usePostFeeling } from '../../hooks/queries/create/usePostFeeling';

export default function CreatedDiary({ title, date, content, feeling }){

    const navigate = useNavigate();

    // const [showResponseBtn, setShowResponseBtn] = useState(false);
    // const [feelingState, setFeelingState] = useRecoilState(feelingKeyword);

    // // data에 feeling이 존재하는 지 여부 확인하기
    // const checkFeelingExists = () => {
    //     return !!feelingState;
    // }

    // // advice가 있는지 확인하여 useEffect로 렌더링
    // useEffect(() => {
    //     const feelingExists = checkFeelingExists();
    //     setShowResponseBtn(feelingExists);
    // }, []);

    const handleResponse = () => {
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
                    <ResponseEmotionViewBtn onClick={handleResponse} />
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