import { useNavigate } from "react-router-dom";
import * as S from './RequestEmotionViewBtn'


export default function GoToEmotionView() {
    const navigate = useNavigate();

    const handleClick = () => {
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