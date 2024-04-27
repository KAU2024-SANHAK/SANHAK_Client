// DiaryView.js
import * as S from './DiaryView.style';
import { useState } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import GoToReplyBtn from '../../components/common/buttons/GoToReplyBtn/GoToReplyBtn';

export default function DiaryView() {
    const [isClick, setIsClick] = useState(false);

    const handlePopUpToggle = () => {
        setIsClick(!isClick); // Toggle isClick state
    };

    return (
        <S.DiaryViewPageWrapper>
            <S.DiaryViewFilter>
                <CreatedDiary />
                <S.GoToReplyBtnWrapper>
                    <GoToReplyBtn onReplyBtnClick={handlePopUpToggle} /> {/* Pass the function to GoToReplyBtn */}
                </S.GoToReplyBtnWrapper>
                {isClick ? (
                    <PopUp name="꿀비의 답장">
                        <DiaryViewPopUp />
                    </PopUp>
                ) : null}
            </S.DiaryViewFilter>
        </S.DiaryViewPageWrapper>
    );
}


