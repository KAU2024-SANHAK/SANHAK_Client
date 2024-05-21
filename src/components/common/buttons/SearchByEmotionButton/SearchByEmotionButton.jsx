import { useNavigate } from 'react-router-dom';
import * as S from './SearchByEmotionButton.style';

export default function SearchByEmotionButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/searchbyemotion');
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.SearchByEmotionButtonIcon />
      <S.SearchByEmotionButtonText>
        <div>감정별</div>
        일기조회
      </S.SearchByEmotionButtonText>
    </S.Wrapper>
  );
}
