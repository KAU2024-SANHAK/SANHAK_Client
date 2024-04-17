import { useNavigate } from "react-router-dom";
import * as S from "./TodayEmotion.style"


export default function GoToReplyBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/emotionview')
    }

    return (
        <S.TodayEmotionBtnWrapper onClick={handleClick}>
            <S.TodayEmotionBtnText>
                오늘의 감정 분석 보러가기
            </S.TodayEmotionBtnText>
            <S.TodayEmotionBtnIconWrapper>
                <S.TodayEmotionBtnIcon/>
            </S.TodayEmotionBtnIconWrapper>
        </S.TodayEmotionBtnWrapper>
    )
}