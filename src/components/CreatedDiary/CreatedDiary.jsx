import * as S from './CreatedDiary.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/RequestEmotionViewBtn/RequestEmotionViewBtn';
import ResponseEmotionViewBtn from '../common/buttons/GoToEmotionViewBtn/ResponseEmotionViewBtn/ResponseEmotionViewBtn';
import { useRecoilState } from 'recoil';
import { diaryTitle } from '../../recoil/atoms';
import { diaryId } from '../../recoil/atoms';
import { diary_content } from '../../recoil/atoms';
import { feeling } from '../../recoil/atoms';
import { usePostFeeling } from '../../hooks/queries/create/usePostFeeling';

export default function CreatedDiary(){

    const navigate = useNavigate();

    const [showResponseBtn, setShowResponseBtn] = useState(false);
    const [feelingState, setFeelingState] = useRecoilState(feeling);

    // data에 feeling이 존재하는 지 여부 확인하기
    const checkFeelingExists = () => {
        return !!feelingState;
    }

    const setDiaryFeeling = (feel) => {
        feeling.set(feel);
    }

    // advice가 있는지 확인하여 useEffect로 렌더링
    useEffect(() => {
        const feelingExists = checkFeelingExists();
        setShowResponseBtn(feelingExists);
    }, []);

    const handleRequest = () => {
        const responseObject = usePostFeeling(diaryId={diaryId});
        const { status, data } = responseObject;
        if (status === 201) {
            setDiaryFeeling(data.feeling);
        }

        navigate('/emotionview');
    }

    const handleResponse = () => {
        navigate('/emotionview');
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
                        {diaryTitle}
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        {/* {data.createdDate} */}
                    </S.DiaryDate>
                </S.DiaryTopTextWrapper>
                <S.DiaryPhotoWrapper/>
                <S.DiaryTextWrapper>
                    <S.DiaryText>
                        {diary_content}
                    </S.DiaryText>
                </S.DiaryTextWrapper>
            </S.CreatedDiaryComponentWrapper>
        </S.CreatedDiaryWrapper>
    )
}