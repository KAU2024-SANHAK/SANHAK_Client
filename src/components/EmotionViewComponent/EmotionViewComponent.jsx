import * as S from './EmotionViewComponent.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useNavigate } from 'react-router-dom';
import { convertFeelingText } from '../../utils/convertFeelingText';

export function EmotionViewComponent({ feeling }) {
  const navigate = useNavigate();
  const feelingText = convertFeelingText(feeling);
  console.log(feelingText);
  const handleClick = () => {
    navigate('/diaryview')
  }

  const feelingImgMap = {
    HAPPY: <S.Happy />,
    SAD: <S.Sad />,
    ANGRY: <S.Angry />,
    WORRIED: <S.Worried />,
    RELAX: <S.Relax />,
    SURPRISED: <S.Surprised />
  }

  function convertFeelingToImg(feeling) {
    return feelingImgMap[feeling] ||  null;
  }

  return(
    <S.EmotionViewWrapper>
      <S.BtnBackWrapper >
        <BtnBack handleClick={handleClick} />
      </S.BtnBackWrapper>

      <S.EmotionViewComponentWrapper>
        <S.TodayEmotionQ>
          너의 오늘 
          <br />
          하루 감정은
        </S.TodayEmotionQ>

        <S.EmotionPhoto>
          <S.EmotionPhotoWrapper>
            {convertFeelingToImg(feeling)}
          </S.EmotionPhotoWrapper>
        </S.EmotionPhoto>

        <S.EmotionTagWrapper>
          <S.EmotionTag>
            {"#" + feelingText}                    
          </S.EmotionTag>
        </S.EmotionTagWrapper>

      </S.EmotionViewComponentWrapper>
    </S.EmotionViewWrapper>
  )
}