import { useNavigate } from "react-router-dom";
import * as S from "./TodayEmotion.style"


export default function TodayEmotion() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/todayemotion')
    }

    return (
        <S.TodayEmotionBtnWrapper>
            <S.TodayEmotionBtnIconWrapper>
                <S.TodayEmotionBtnIcon/>
            </S.TodayEmotionBtnIconWrapper>
            <S.TodayEmotionBtnText>
                오늘의 감정 분석 보러가기
            </S.TodayEmotionBtnText>
        </S.TodayEmotionBtnWrapper>
    )
}