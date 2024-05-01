// DiaryView.js
import * as S from './DiaryView.style';
import { useState } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import RequestReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/RequestReplyViewBtn'
import ResponseReplyViewBtn from '../../components/common/buttons/GoToReplyViewBtn/ResponseReplyViewBtn'
import { useRecoilState } from 'recoil';

export default function DiaryView({ state }) {
    const [isClick, setIsClick] = useState(false);
    const [diary, setDiary] = useRecoilState('diaryState=>atom이름!!!')

    const handlePopUpToggle = () => {
        setIsClick(!isClick);
        const response = usePostAdvice(diaryId);
    };

    // useEffect를 써서 atom을 검사하고 렌더링

    // default 값으로 (조회하기 / 일기생성) 눌렀을 때, 리코일 조사해서 Request인지, Response인지 띄우기

    // popup 내의 x버튼 누를 때마다 리코일의 조언 여부에 따라 state 값을 달리함. 버튼 선택적으로 렌더링 하기.

    return (
        <S.DiaryViewPageWrapper>
                <CreatedDiary contents={diary}/>
                <S.GoToReplyBtnWrapper>
                    <RequestReplyViewBtn/>
                    <GoToReplyBtn onReplyBtnClick={handlePopUpToggle} /> {/* Pass the function to GoToReplyBtn */}
                </S.GoToReplyBtnWrapper>
                {/* 리코일에 조언 저장이 되어있다면, */}
                {isClick ? (
                    <PopUp name="꿀비의 답장">
                        <DiaryViewPopUp isClick={isClick} setIsClick={setIsClick} spicy={response.spicy} kind={response.kind}/>
                    </PopUp>
                ) : null}
        </S.DiaryViewPageWrapper>
    );
}


