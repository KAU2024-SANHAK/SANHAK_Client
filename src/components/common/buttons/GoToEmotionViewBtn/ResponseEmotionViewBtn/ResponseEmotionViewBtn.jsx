// 일기생성 완료 화면 (우측 상단)에 보여지는 버튼_해당 페이지로 렌더링될 때, 감정 키워드가 존재하는 경우

import { useNavigate } from "react-router-dom";
import * as S from './ResponseEmotionViewBtn'


export default function GoToEmotionView() {
    const navigate = useNavigate();

    const handleClick = () => {

        // 서버에 request => 서버에서 recoil atom에 넣고 => 감정 키워드를 recoil atom에서 가져옴

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