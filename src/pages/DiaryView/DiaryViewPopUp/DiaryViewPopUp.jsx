import React, { useState } from 'react';
import * as S from './DiaryViewPopUp.style';

export default function DiaryViewPopUp({ spicy, kind }) {
    const [spicySelected, setSpicySelected] = useState(true); // 매운맛 선택 여부 상태
    const [kindSelected, setKindSelected] = useState(false); // 순한맛 선택 여부 상태

    const handleClick = () => {
        setSpicySelected(!spicySelected); // 매운맛 선택
        setKindSelected(!kindSelected); // 순한맛 선택 해제
    };

    return (
        <S.DiaryViewPopUpWrapper>
            <S.BtnWrapper>
                <S.SpicyTextWrapper onClick={handleClick} selected={spicySelected}>
                    <S.Spicy>
                        매운맛
                    </S.Spicy>
                </S.SpicyTextWrapper>
                <S.KindTextWrapper onClick={handleClick} selected={kindSelected}>
                    <S.Kind>
                        순한맛
                    </S.Kind>
                </S.KindTextWrapper>
            </S.BtnWrapper>
            
            <S.ReplyWrapper>
                <S.ReplyTextWrapper>
                    {/* {spicySelected ? spicy : kind} 중괄호 {}를 사용하여 변수를 출력 */}
                    영화 보기를 좋아하는 친구라면, 어벤져스 시리즈 이외에 MCU(Marvel Cinematic Universe)의 다른 작품들을 추천해드리고 싶네요. 폭넓은 MCU 세계관에서 나오는 영화들은 히어로물을 넘어서 각각 독특한 개성과 가치를 지니고 있습니다. 당신의 감동을 이어가는데 도움이 될만한 작품들입니다. 또 어벤져스 이외에도 DC, X-MEN 등 다양한 슈퍼히어로 영화들이 있으니 체크해보시는 것도 좋을 것 같습니다.
                </S.ReplyTextWrapper>
            </S.ReplyWrapper>
        </S.DiaryViewPopUpWrapper>
    );
}
