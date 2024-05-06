import * as S from './CreatedDiary.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/RequestEmotionViewBtn/RequestEmotionViewBtn';
import ResponseEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/ResponseEmotionViewBtn/ResponseEmotionViewBtn';
import { useRecoilState } from 'recoil';
import { feelingKeyword } from '../../recoil/atoms';

// API 연결 시 활성화할 부분
import { usePostFeeling } from '../../hooks/queries/create/usePostFeeling';

export default function CreatedDiary({ content, feeling, title }){

    const navigate = useNavigate();

    const [showResponseBtn, setShowResponseBtn] = useState(false);
    const [feelingState, setFeelingState] = useRecoilState(feelingKeyword);

    // data에 feeling이 존재하는 지 여부 확인하기
    const checkFeelingExists = () => {
        return !!feelingState;
    }

    // advice가 있는지 확인하여 useEffect로 렌더링
    useEffect(() => {
        const feelingExists = checkFeelingExists();
        setShowResponseBtn(feelingExists);
    }, []);

    const handleRequest = () => {
        // API 연결 시 활성화할 코드
        // const responseObject = usePostFeeling(diaryId={diaryId});

        navigate('/emotionview');
    }

    const handleResponse = () => {
        navigate('/emotionview');
    }
    const handleClick = () => {
        navigate('/main')
    }

    return(
        <S.CreatedDiaryWrapper>
            <S.BtnBackWrapper onClick={handleClick}>
                <BtnBack/>
            </S.BtnBackWrapper>
            <S.TodayEmotionBtnWrapper>
                {/* 리코일에 조언이 저장되어 있다면 Response 버튼을 렌더링하고 그렇지 않으면 Request 버튼을 렌더링 */}
                {showResponseBtn ? (
                    <ResponseEmotionViewBtn onClick={handleResponse}/>
                ) : (
                    <RequestEmotionViewBtn onClick={handleRequest}/>
                )}
            </S.TodayEmotionBtnWrapper>
            <S.CreatedDiaryComponentWrapper>
                <S.DiaryTopTextWrapper>
                    <S.DiaryTitle>
                        {title}
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        {/* {data.createdDate} */}
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