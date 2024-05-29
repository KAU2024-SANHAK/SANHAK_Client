import { useNavigate } from 'react-router-dom';
import * as S from './SearchByEmotionButton.style';

export default function SearchByEmotionButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/searchbyemotion');
  };

  return (
    <S.SearchByEmotionClickedWrapper
      whileTap={{ scale: 0.9, backgroundColor: '#FFFFFF'}}
      transition={{ duration: 0.3 }}
    >
      <S.Wrapper onClick={handleClick}>
        <S.SearchByEmotionButtonIcon />
        <S.SearchByEmotionButtonText>
          <p>감정별</p>
          일기조회
        </S.SearchByEmotionButtonText>
      </S.Wrapper>
    </S.SearchByEmotionClickedWrapper>
  );
}
