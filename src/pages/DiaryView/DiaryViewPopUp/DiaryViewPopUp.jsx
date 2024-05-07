import React, { useState } from 'react';
import * as S from './DiaryViewPopUp.style';

export default function DiaryViewPopUp({ spicy, kind }) {
    const [spicySelected, setSpicySelected] = useState(true); // 매운맛 선택 여부 상태
    const [kindSelected, setKindSelected] = useState(false); // 순한맛 선택 여부 상태

    const SpicyhandleClick = () => {
        setSpicySelected(true); // 매운맛 선택
        setKindSelected(false); // 순한맛 선택 해제
    };

    const KindhandleClick = () => {
        setSpicySelected(false); // 매운맛 선택
        setKindSelected(true); // 순한맛 선택 해제
    };

    return (
        <S.DiaryViewPopUpWrapper>
            <S.BtnWrapper>
                <S.SpicyTextWrapper onClick={SpicyhandleClick} selected={spicySelected}>
                    <S.Spicy>
                        매운맛
                    </S.Spicy>
                </S.SpicyTextWrapper>
                <S.KindTextWrapper onClick={KindhandleClick} selected={kindSelected}>
                    <S.Kind>
                        순한맛
                    </S.Kind>
                </S.KindTextWrapper>
            </S.BtnWrapper>
            
            <S.ReplyWrapper>
                <S.ReplyTextWrapper>
                    {spicySelected ? spicy : kind}
                </S.ReplyTextWrapper>
            </S.ReplyWrapper>
        </S.DiaryViewPopUpWrapper>
    );
}
