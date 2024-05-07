import * as S from './EmotionViewComponent.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useNavigate } from 'react-router-dom';

export function EmotionViewComponent({ feeling }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/diaryview')
    }

    const feelingMap = {
        HAPPY: "기쁨",
        SAD: "슬픔",
        ANGRY: "분노",
        WORRIED: "걱정",
        RELAX: "평온",
        SURPRISED: "놀람"
    };

    const feelingImgMap = {
        HAPPY: <S.Happy />,
        SAD: <S.Sad />,
        ANGRY: <S.Angry />,
        WORRIED: <S.Worried />,
        RELAX: <S.Relax />,
        SURPRISED: <S.Surprised />
    }

    function convertFeelingToKorean(feeling) {
        return feelingMap[feeling] || null;
    }

    function convertFeelingToImg(feeling) {
        return feelingImgMap[feeling] ||  null;
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
                    <S.EmotionPhoto>
                        <S.EmotionPhotoWrapper>
                            {convertFeelingToImg(feeling)}
                        </S.EmotionPhotoWrapper>
                    </S.EmotionPhoto>

                <S.EmotionTagWrapper>
                    <S.EmotionTag>
                        {/* {diaryFeeling} */}
                        {"#" + convertFeelingToKorean(feeling)}                    </S.EmotionTag>
                </S.EmotionTagWrapper>
            </S.EmotionViewComponentWrapper>
        </S.EmotionViewWrapper>
    )
}