// 일기생성 완료 화면 (우측 상단)에 보여지는 버튼_서버에 없는 감정 키워드를 AI로부터 생성하기 위함

import { useNavigate } from "react-router-dom";
import * as S from './RequestEmotionViewBtn'


export default function GoToEmotionView() {
    const navigate = useNavigate();

    const handleClick = () => {
        
        // AI에게 일기글을 request하고, response로 감정 키워드를 가져옴 (느린 일기의 경우에만 해당)

        navigate('/emotionview')
    }

    return (
        <S.TodayEmotionBtnWrapper onClick={handleClick}>
            <S.TodayEmotionBtnText>
                오늘의 감정 분석 생성하기
            </S.TodayEmotionBtnText>
            <S.TodayEmotionBtnIconWrapper>
                <S.TodayEmotionBtnIcon/>
            </S.TodayEmotionBtnIconWrapper>
        </S.TodayEmotionBtnWrapper>
    )
}