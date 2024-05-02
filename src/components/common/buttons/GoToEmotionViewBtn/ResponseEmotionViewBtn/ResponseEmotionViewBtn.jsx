// 일기생성 완료 화면 (우측 상단)에 보여지는 버튼_해당 페이지로 렌더링될 때, 감정 키워드가 존재하는 경우

import * as S from './ResponseEmotionViewBtn';

export default function ResponseEmotionViewBtn() {

    return (
        <S.TodayEmotionBtnWrapper>
            <S.TodayEmotionBtnText>
                오늘의 감정 분석 보러가기
            </S.TodayEmotionBtnText>
            <S.TodayEmotionBtnIconWrapper>
                <S.TodayEmotionBtnIcon/>
            </S.TodayEmotionBtnIconWrapper>
        </S.TodayEmotionBtnWrapper>
    )
}