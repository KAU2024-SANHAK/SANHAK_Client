import * as S from './EmotionViewComponent.style';
import BtnBack from '../common/buttons/Back/BtnBack';

export function EmotionViewComponent() {
    return(
        <S.EmotionViewWrapper>
            <S.BtnBackWrapper>
                <BtnBack/>
            </S.BtnBackWrapper>
            <S.EmotionViewComponentWrapper>
                <S.TodayEmotionQ>
                    너의 오늘 <br/>
                    하루 감정은?
                </S.TodayEmotionQ>
                <S.EmotionPhoto/>
                <S.EmotionTagWrapper>
                    <S.EmotionTag>
                        #기쁨
                    </S.EmotionTag>
                </S.EmotionTagWrapper>
            </S.EmotionViewComponentWrapper>
        </S.EmotionViewWrapper>
    )
}