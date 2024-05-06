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
            <S.HeaderWrapper>
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
            </S.HeaderWrapper>
            
            <S.CreatedDiaryComponentWrapper>
                <S.DiaryTopTextWrapper>
                    <S.DiaryTitle>
                        제목입니당! 제목이 더 길어지면 어떻게되려나했는데 엄청 안예뻐지는군요..
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        날짜입니당
                    </S.DiaryDate>
                </S.DiaryTopTextWrapper>
                <S.DiaryPhotoWrapper/>
                <S.DiaryTextWrapper>
                    <S.DiaryText>
                        내용입니당! - 내용이 길어져도 과연 컴포넌트가 늘어나면서 내용들을 잘 핸들링할 수 있는지가 궁금하네용./// 그래서 한번 길게 써봅니다
                        핸들을 못하네용.. 첫 번째 문제. 답장 보러가기 버튼이 맨 아래 박혀야 합니다. 두 번째 문제: 100vh까지밖에 보이지 않는 문제가 있습니당..
                        세 번째 문제. 배경의 핑크색이 감싸줘야 합니당.. 네 번째 문제: 리코일 값을 불러와서 수행해야 합니당..
                    </S.DiaryText>
                </S.DiaryTextWrapper>
            </S.CreatedDiaryComponentWrapper>
        </S.CreatedDiaryWrapper>
    )
}