import React, { useState } from 'react';
import * as S from './DiaryViewPopUp.style';

export default function DiaryViewPopUp({ spicy, kind }) {
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

    // handlePopUpToggle 함수 수정
    const handlePopUpToggle = () => {
        // 팝업을 열고 닫는 동작을 수행하는 함수 추가
    };

    return (
        <S.DiaryViewPopUpWrapper>
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
                    {spicySelected ? spicy : kind} {/* 중괄호 {}를 사용하여 변수를 출력 */}
                </S.ReplyTextWrapper>
            </S.ReplyWrapper>
        </S.DiaryViewPopUpWrapper>
    );
}
