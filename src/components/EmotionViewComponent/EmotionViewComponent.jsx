// AI / 서버에서 감정 키워드를 받아와 <S.EmotionTag> 사이에 렌더링하기

import * as S from './EmotionViewComponent.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useNavigate } from 'react-router-dom';

export function EmotionViewComponent() {
    const navigate = useNavigate();
    const [diary, setDiary] = useRecoilState(diaryContentState);

    const handleClick = () => {
        navigate('/diaryview')
    }

    return(
        <S.EmotionViewWrapper>
            <S.BtnBackWrapper onClick={handleClick}>
                <BtnBack/>
            </S.BtnBackWrapper>
            <S.EmotionViewComponentWrapper>
                <S.TodayEmotionQ>
                    너의 오늘 <br/>
                    하루 감정은
                </S.TodayEmotionQ>
                <S.EmotionPhoto/>
                <S.EmotionTagWrapper>
                    <S.EmotionTag>
                        {diary.feeling}
                    </S.EmotionTag>
                </S.EmotionTagWrapper>
            </S.EmotionViewComponentWrapper>
        </S.EmotionViewWrapper>
    )
}