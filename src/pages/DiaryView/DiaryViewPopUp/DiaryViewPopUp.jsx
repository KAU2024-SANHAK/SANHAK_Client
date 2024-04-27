import React, { useState } from 'react';
import * as S from './DiaryViewPopUp.style';

export default function DiaryViewPopUp() {
    const [spicySelected, setSpicySelected] = useState(true); // 매운맛 선택 여부 상태
    const [mildSelected, setMildSelected] = useState(false); // 순한맛 선택 여부 상태

    const handleSpicyClick = () => {
        setSpicySelected(true); // 매운맛 선택
        setMildSelected(false); // 순한맛 선택 해제
    };

    const handleMildClick = () => {
        setSpicySelected(false); // 매운맛 선택 해제
        setMildSelected(true); // 순한맛 선택
    };

    return (
        <S.DiaryViewPopUpWrapper>
            <S.SpicyTextWrapper onClick={handleSpicyClick} selected={spicySelected}>
                <S.Spicy>
                    매운맛
                </S.Spicy>
            </S.SpicyTextWrapper>
            <S.KindTextWrapper onClick={handleMildClick} selected={mildSelected}>
                <S.Kind>
                    순한맛
                </S.Kind>
            </S.KindTextWrapper>
            <S.ReplyWrapper>
                <S.ReplyTextWrapper>
                    내용이 들어갈 예정
                </S.ReplyTextWrapper>
            </S.ReplyWrapper>
        </S.DiaryViewPopUpWrapper>
    );
}
