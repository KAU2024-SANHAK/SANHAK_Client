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
        const responseObject = usePostAdvice(diaryId={diaryId});
        const { status, data } = responseObject;
        if (status === 201) {
            setDiaryAdvice(data.advice);
        }

        setIsClick(!isClick);
    }

    const responsePopUpToggle = () => {
        setIsClick(!isClick);
    }

    return (
        <S.DiaryViewPageWrapper>
                <CreatedDiary contents={data}/>
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


