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
// import { diaryContent } from '../../utils/diaryContent';
import { useNavigate } from 'react-router-dom';

export default function DiaryView() {

    const [isClick, setIsClick] = useState(false);
    // const [showResponseBtn, setShowResponseBtn] = useState(false);
    // const [adviceState, setAdviceState] = useRecoilState(advice);

    // const responseObject = {diaryContent}

    // data에 advice가 존재하는 지 여부 확인하기
    // const checkAdviceExists = () => {
    //     return !!adviceState;
    // }

    // const setDiaryAdvice = (adv) => {
    //     advice.set(adv);
    // }

    // advice가 있는지 확인하여 useEffect로 렌더링
    // useEffect(() => {
    //     const adviceExists = checkAdviceExists();
    //     setShowResponseBtn(adviceExists);
    // }, []);

    // const requestPopUpToggle = () => {
    //     // API 연결 시 활성화할 코드
    //     // const responseObject = usePostAdvice(diaryId={diaryId});

    //     setIsClick(!isClick);
    // }

    const responsePopUpToggle = () => {
        setIsClick(!isClick);
    }

    return (
        <S.DiaryViewPageWrapper>
            <S.Filter>
                <S.CreatedDiaryWrapper>
                    <CreatedDiary
                        // content={diaryContent.diary_content}
                        // feeling={diaryContent.feeling}
                        // title={diaryContent.diaryTitle}    
                    />
                </S.CreatedDiaryWrapper>
                
                <S.GoToReplyBtnWrapper>
                    {/* 리코일에 조언이 저장되어 있다면 Response 버튼을 렌더링하고 그렇지 않으면 Request 버튼을 렌더링
                    {showResponseBtn ? (
                        <ResponseReplyViewBtn onClick={responsePopUpToggle}/>
                    ) : (
                        <RequestReplyViewBtn onClick={requestPopUpToggle}/>
                    )} */}
                    <ResponseReplyViewBtn onClick={responsePopUpToggle}/>
                        {/* isClick의 상태에 따라 PopUp 렌더링 여부 결정 */}
                        {isClick === true ? (
                            <S.PopUpWrapper>
                                <S.HoneyBearWrapper>
                                    <S.HoneyBear height='17rem'/>
                                </S.HoneyBearWrapper>

                                <PopUp name="꿀비의 답장">
                                    <DiaryViewPopUp/>
                                    <S.CloseBtn onClick={responsePopUpToggle} >
                                        <S.XBtn />
                                    </S.CloseBtn>
                                </PopUp>
                            </S.PopUpWrapper>
                            
                        ) : null}
                </S.GoToReplyBtnWrapper>
            </S.Filter>
                

                
        </S.DiaryViewPageWrapper>
    );
}


