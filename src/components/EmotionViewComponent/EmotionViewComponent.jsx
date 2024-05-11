import * as S from './EmotionViewComponent.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useNavigate } from 'react-router-dom';
import { convertFeelingText } from '../../utils/convertFeelingText';
import FeelingHoneyBear from '../common/HoneyBear/FeelingHoneyBear';

export function EmotionViewComponent({ feeling }) {
  const navigate = useNavigate();
  const feelingText = convertFeelingText(feeling);
  console.log(feelingText);
  const handleClick = () => {
    navigate('/diaryview')
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
            <FeelingHoneyBear feeling={feeling}/>
          </S.EmotionPhotoWrapper>
        </S.EmotionPhoto>

        <S.EmotionTagWrapper>
          <S.EmotionTag>
            {feelingText}                    
          </S.EmotionTag>
        </S.EmotionTagWrapper>

      </S.EmotionViewComponentWrapper>
    </S.EmotionViewWrapper>
  )
}