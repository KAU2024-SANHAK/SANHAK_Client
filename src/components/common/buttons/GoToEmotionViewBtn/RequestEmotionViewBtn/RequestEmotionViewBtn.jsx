// 일기생성 완료 화면 (우측 상단)에 보여지는 버튼_서버에 없는 감정 키워드를 AI로부터 생성하기 위함

import * as S from './RequestEmotionViewBtn'

export default function RequestEmotionViewBtn() {

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