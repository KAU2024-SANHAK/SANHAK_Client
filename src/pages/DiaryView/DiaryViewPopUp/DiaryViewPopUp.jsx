import React, { useState } from 'react';
import * as S from './DiaryViewPopUp.style';

export default function DiaryViewPopUp({ isClick, setIsClick, spicy, kind }) {
    const [spicySelected, setSpicySelected] = useState(true); // 매운맛 선택 여부 상태
    const [kindSelected, setKindSelected] = useState(false); // 순한맛 선택 여부 상태

    const handleSpicyClick = () => {
        setSpicySelected(true); // 매운맛 선택
        setKindSelected(false); // 순한맛 선택 해제
    };

    const handleKindClick = () => {
        setSpicySelected(false); // 매운맛 선택 해제
        setKindSelected(true); // 순한맛 선택
    };

    const handlePopUpToggle = () => {
        setIsClick(!isClick);
        // 조언 여부를 리코일에서 확인하고 선택적으로 값을 부모 컴포넌트에게 보내기 (state값을 통해서)
        if ()
    };

    return (
        <S.DiaryViewPopUpWrapper>
            <S.BtnExit onClick={handlePopUpToggle} >

            </S.BtnExit>
            <S.SpicyTextWrapper onClick={handleSpicyClick} selected={spicySelected}>
                <S.Spicy>
                    매운맛
                </S.Spicy>
            </S.SpicyTextWrapper>
            <S.KindTextWrapper onClick={handleKindClick} selected={kindSelected}>
                <S.Kind>
                    순한맛
                </S.Kind>
            </S.KindTextWrapper>
            <S.ReplyWrapper>
                <S.ReplyTextWrapper>
                    {spicySelected ? {spicy} : {kind}}
                </S.ReplyTextWrapper>
            </S.ReplyWrapper>
        </S.DiaryViewPopUpWrapper>
    );
}
