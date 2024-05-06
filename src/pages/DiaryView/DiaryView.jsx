import * as S from './DiaryView.style';
import { useState, useEffect } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import RequestReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/RequestReplyViewBtn/RequestReplyViewBtn'
import ResponseReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/ResponseReplyViewBtn/ResponseReplyViewBtn'
import { useRecoilState } from 'recoil';
import { advice } from '../../recoil/atoms';
import { diaryId } from '../../recoil/atoms';
import { usePostAdvice } from '../../hooks/queries/create/usePostAdvice';

// utils에서 테스트용 js 파일을 가져오는 코드
import { diaryContent } from '../../utils/diaryContent';

export default function DiaryView() {

    const [isClick, setIsClick] = useState(false);
    const [showResponseBtn, setShowResponseBtn] = useState(false);
    const [adviceState, setAdviceState] = useRecoilState(advice);

    // data에 advice가 존재하는 지 여부 확인하기
    const checkAdviceExists = () => {
        return !!adviceState;
    }

    const setDiaryAdvice = (adv) => {
        advice.set(adv);
    }

    // advice가 있는지 확인하여 useEffect로 렌더링
    useEffect(() => {
        const adviceExists = checkAdviceExists();
        setShowResponseBtn(adviceExists);
    }, []);

    const requestPopUpToggle = () => {
        // API 연결 시 활성화할 코드
        // const responseObject = usePostAdvice(diaryId={diaryId});

        // API 연결 시 비활성화 할 코드
        const responseObject = {diaryContent}
        setDiaryAdvice(responseObject.diaryContent.data.advice)

        setIsClick(!isClick);
    }

    const responsePopUpToggle = () => {
        setIsClick(!isClick);
    }

    return (
        <S.DiaryViewPageWrapper>
                <CreatedDiary
                    content={diaryContent.diary_content}
                    feeling={diaryContent.feeling}
                    title={diaryContent.diaryTitle}    
                />
                <S.GoToReplyBtnWrapper>
                    {/* 리코일에 조언이 저장되어 있다면 Response 버튼을 렌더링하고 그렇지 않으면 Request 버튼을 렌더링 */}
                    {showResponseBtn ? (
                        <ResponseReplyViewBtn onClick={responsePopUpToggle}/>
                    ) : (
                        <RequestReplyViewBtn onClick={requestPopUpToggle}/>
                    )}
                </S.GoToReplyBtnWrapper>

                {/* isClick의 상태에 따라 PopUp 렌더링 여부 결정 */}
                {isClick ? (
                    <PopUp name="꿀비의 답장">
                        <DiaryViewPopUp setIsClick spicy={advice.spicy} kind={advice.kind}/>
                    </PopUp>
                ) : null}
        </S.DiaryViewPageWrapper>
    );
}


