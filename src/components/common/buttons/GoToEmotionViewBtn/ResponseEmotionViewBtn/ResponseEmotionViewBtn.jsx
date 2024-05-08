import * as S from './ResponseEmotionViewBtn.style';

export default function ResponseEmotionViewBtn({ onClick }) {

    return (
        <S.ResponseEmotionViewBtnWrapper onClick={onClick}>
            <S.ResponseEmotionViewBtnText>
                오늘의 감정 분석 보러가기
            </S.ResponseEmotionViewBtnText>
            <S.ResponseEmotionViewBtnIconWrapper>
                <S.ResponseEmotionViewBtnIcon/>
            </S.ResponseEmotionViewBtnIconWrapper>
        </S.ResponseEmotionViewBtnWrapper>
    )
}