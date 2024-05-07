// 여기서는 useEffect로 조언이 있는지 확인하고, 감정이 있다면 ResponseReplyViewBtn 버튼에
// responsePopUpToggle 핸들러를 연결하고, 없다면 requestPopUpToggle을 연결함 (자식요소에게 넘겨줌)

import * as S from './DiaryView.style';
import { useState, useEffect } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import ResponseReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/ResponseReplyViewBtn/ResponseReplyViewBtn'

// recoil에서 atom 가져오기
import { useRecoilState, useRecoilValue } from 'recoil';
import { diaryId } from '../../recoil/atoms';
import { diary_content } from '../../recoil/atoms';
import { DiaryDate } from '../../components/CreatedDiary/CreatedDiary.style';

// TEST: utils에서 테스트용 js 파일을 가져오는 코드
import { diaryContent } from '../../utils/diaryContent';

export default function DiaryView() {

    const [isClick, setIsClick] = useState(false);
    // const [adviceState, setAdviceState] = useRecoilState(false);

    // TEST: utils 테스트 코드 돌리기
    const response = diaryContent[0];

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
    //     setAdviceState(adviceExists);
    // }, []);

    const requestPopUpToggle = () => {
        // API 연결 시 활성화할 코드
        const responseAdvice = usePostAdvice(diaryId);
        // Recoil에 저장하는 코드
        setDiaryAdvice(responseAdvice);

        setIsClick(!isClick);
    }

    const responsePopUpToggle = () => {
        setIsClick(!isClick);
    }

    return (
        <S.DiaryViewPageWrapper>
            <S.Filter>
                <S.CreatedDiaryWrapper>
                    <CreatedDiary
                        date={response.createdDate}
                        content={response.diary_content}
                        feeling={response.feeling}
                        title={response.diaryTitle}    
                    />
                </S.CreatedDiaryWrapper>
                
                <S.GoToReplyBtnWrapper>
                    {/* API 연결 시에 */}
                    {/* <ResponseReplyViewBtn onClick={adviceState ? responsePopUpToggle : requestPopUpToggle} /> */}

                    <ResponseReplyViewBtn onClick={responsePopUpToggle} />

                        {/* isClick의 상태에 따라 PopUp 렌더링 여부 결정 */}
                        {isClick === true ? (
                            <S.PopUpWrapper>
                                <S.HoneyBearWrapper>
                                    <S.HoneyBear height='17rem'/>
                                </S.HoneyBearWrapper>

                                <PopUp name="꿀비의 답장">
                                    <DiaryViewPopUp spicy={response.advice.spicy} kind={response.advice.kind}/>
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


