import * as S from './DiaryView.style';
import { useState, useEffect } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import ResponseReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/ResponseReplyViewBtn/ResponseReplyViewBtn'
import { useRecoilState } from 'recoil';
import { diaryId } from '../../recoil/atoms';
import { diaryTitle } from '../../recoil/atoms';
import { createdDate } from '../../recoil/atoms';
import { diaryContent } from '../../recoil/atoms';
import { diaryAdvice } from '../../recoil/atoms';
import { usePostAdvice } from '../../hooks/queries/create/usePostAdvice';

export default function DiaryView() {

    const [isClick, setIsClick] = useState(false);

    // TEST: utils 테스트 코드 돌리기
    // const response = diaryContent[0];

    // REAL: API 연결후 코드 돌리기
    // **********************************************************
    const [advice, setAdvice] = useRecoilState(diaryAdvice);

    // data에 advice가 존재하는 지 여부 확인하기
    const checkAdviceExists = () => {
        return !!advice;
    }

    // advice가 있는지 확인하여 useEffect로 렌더링
    useEffect(() => {
        const adviceExists = checkAdviceExists();
        setAdvice(adviceExists);
    }, []);

    const requestPopUpToggle = () => {
        const responseAdvice = usePostAdvice(diaryId);
        setAdvice(responseAdvice);

        setIsClick(!isClick);
    }
    // **********************************************************

    const responsePopUpToggle = () => {
        setIsClick(!isClick);
    }

    return (
        <S.DiaryViewPageWrapper>
            <S.Filter>
                <S.CreatedDiaryWrapper>
                    <CreatedDiary
                        // TEST: API 연결 전 테스트코드
                        // title={response.diaryTitle}  
                        // date={response.createdDate}
                        // content={response.diary_content}

                        // REAL: API 연결 시 실행
                        title={diaryTitle}  
                        date={createdDate}
                        content={diaryContent}
                    />
                </S.CreatedDiaryWrapper>
                
                <S.GoToReplyBtnWrapper>
                    {/* TEST: API 연결 전 실행 */}
                    {/* <ResponseReplyViewBtn onClick={responsePopUpToggle} /> */}

                    {/* REAL: API 연결 시에 */}
                    <ResponseReplyViewBtn onClick={advice ? responsePopUpToggle : requestPopUpToggle} />

                        {/* isClick의 상태에 따라 PopUp 렌더링 여부 결정 */}
                        {isClick === true ? (
                            <S.PopUpWrapper>
                                <S.HoneyBearWrapper>
                                    <S.HoneyBear height='17rem'/>
                                </S.HoneyBearWrapper>

                                <PopUp name="꿀비의 답장">
                                    {/* TEST: 테스트용 코드 */}
                                    {/* <DiaryViewPopUp spicy={response.advice.spicy} kind={response.advice.kind}/> */}

                                    {/* REAL: API 연결 시 사용할 코드 */}
                                    <DiaryViewPopUp spicy={diaryAdvice.spicy} kind={diaryAdvice.kind} />
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


